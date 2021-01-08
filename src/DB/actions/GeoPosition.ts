import Realm from "realm";
import RealmOpen from "../index"
import { DAY_SCHEMA } from "../constant";
import { IDB_GeoPosition, IDB_Day} from "../model";

const insertOne = (geoPosition:IDB_GeoPosition)=> new Promise<IDB_GeoPosition>((resolve, reject)=>{
    RealmOpen
        .then(realm=>{

            const date = new Date(new Date(geoPosition.timestamp).toLocaleDateString())
            const day: Realm.Collection<IDB_Day> = realm.objects<IDB_Day>(DAY_SCHEMA).filtered('date = $0', date)
            
            realm.write(() => {
                if(day[0]) { 
                    day[0].geoPositions.push(geoPosition)
                }
                else { console.log("not found")
                    const newDay = realm.create<IDB_Day>(DAY_SCHEMA, {date,geoPositions:[]})
                    newDay.geoPositions.push(geoPosition)
                }
                resolve(geoPosition)
            })
        })
        .catch(err=>{
            console.log(err)
            reject(err)
        })
})

export const GeoPositionActions = {
    insertOne,
}


// const insertOne = (newGeolocation:{
//     latitude:number
//     longitude: number
//     accuracy: number
//     altitude?: number
//     heading?: number
//     speed?: number
//     altitudeAccuracy?: number
    
//     timestamp: number
//     mocked?:boolean
// }) => new Promise<IrealmGeolocation>((resolve,reject)=>{
//     RealmOpen
//         .then(realm=>{
//             realm.write(()=>{
//                 const date = new Date(newGeolocation.timestamp)
//                 const year = date.getFullYear()
//                 const month = date.getMonth()+1
//                 const day = date.getDate()

//                 resolve(
//                     realm.create<IrealmGeolocation>(GEOLOCATION_SCHEMA, {...newGeolocation, year, month, day})
//                 )
//             })
//         })
//         .catch(err=>{
//             console.log(err)
//             reject(err)
//         })
// }) 

// const getAll = ()=> new Promise<IrealmGeolocation[]>((resolve, reject)=>{
//     RealmOpen
//         .then(realm=>{
//             const geolocations: Realm.Collection<IrealmGeolocation> = realm.objects<IrealmGeolocation>(GEOLOCATION_SCHEMA)
//             resolve(geolocations.filter(()=>true))
//         })
//         .catch(err=>{
//             console.log(err)
//             reject(err)
//         })
// })


// const filter = (q:string)=>new Promise<any>((resolve, reject)=>{
//     RealmOpen
//         .then(realm=>{
//             resolve(
//                 realm.objects(GEOLOCATION_SCHEMA)
//             )
//         })
//         .catch(err=>{
//             console.log(err)
//             reject(err)
//         })
// })

// export const geolocationActions = {
//     insertOne,
//     getAll,
//     filter,
// }