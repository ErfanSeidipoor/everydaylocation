import React, {useEffect, useState} from 'react'
import { GeoPosition } from 'react-native-geolocation-service';
import useGeolocation from "../hooks/useGeolocation";
import { TabNavigator } from "./TabNavigator";
import { Context } from "./context";
import { GeoPositionActions } from "../DB/actions";

export default ()=>{

    const { lastPosition } = useGeolocation()
    const [ geoPositions, setGeoPositions] = useState<GeoPosition[]>([])

    useEffect(()=>{

        lastPosition && setGeoPositions([...geoPositions, lastPosition])
        lastPosition && GeoPositionActions.insertOne(lastPosition)
            .then(geoPosition=>{
                console.log('one geoPosition added to DB > ', geoPosition);
            })
            .catch(err=>{
                console.log('error on adding geoPosition to DB > ', err);
            })
        

    },[lastPosition])

    return (
        <Context.Provider value={{geoPositions}}>
            <TabNavigator />
        </Context.Provider>
    )
}