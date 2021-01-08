import { useState, useEffect} from 'react';
import { PermissionsAndroid } from "react-native";
import Geolocation,{GeoPosition} from 'react-native-geolocation-service';

function useGeoLocation() {
   
   const [ grantedLocation, setGrantedLocation ] = useState<typeof PermissionsAndroid.RESULTS.GRANTED>()
   const [ lastPosition, setLastPosition] = useState<GeoPosition>()
   const [ route, setRoute ] = useState<GeoPosition[]>([])
   const [ geolocationError, setGeolocationError] = useState<Geolocation.GeoError>()

   useEffect(()=>{
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
         .then(isGranted=>{
            if(isGranted) 
               setGrantedLocation(PermissionsAndroid.RESULTS.GRANTED)
            else
               setGrantedLocation(PermissionsAndroid.RESULTS.DENIED)
            })
         .catch(error=>{
            console.log("PermissionsAndroid.check > ",error)
         })
   },[])

   useEffect(()=>{

      if(grantedLocation===PermissionsAndroid.RESULTS.DENIED)
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "دیگر",
            message:
              "این نرم اپلیکیشن نیازمند دسترسی به موقعیت شما می باشد"
              ,
            buttonNeutral: "درخواست در زمان دیگر",
            buttonNegative: "خیر",
            buttonPositive: "بله اجازه میدهم"
          }
        )
        .then(granted=>{

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setGrantedLocation(granted)
          } else {
            console.log("location permission denied =>", granted)
          }

        })
        .catch(error=>{

          console.log("PermissionsAndroid.request > error", error)

        })
  
    },[grantedLocation])

   useEffect(()=>{
      if(grantedLocation===PermissionsAndroid.RESULTS.GRANTED) {
         Geolocation.watchPosition(
            (position:GeoPosition) => {
               setLastPosition(position)
            },
            (err) => {
               // See error code charts below.
               setGeolocationError( err )
               console.log(err.code,);
            },
            {
               // interval?: number
               // fastestInterval?: number
               // useSignificantChanges?: boolean

               showLocationDialog:true,
               enableHighAccuracy: true,
               distanceFilter:10,
               forceRequestLocation: true,
         })
      }
   },[grantedLocation])

   useEffect(()=>{
      lastPosition && setRoute([...route, lastPosition])
   },[lastPosition])

   return {
      lastPosition,
      route,
      grantedLocation,
      geolocationError
   }
}

export default useGeoLocation;