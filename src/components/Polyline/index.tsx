import React, { useState, useEffect} from "react";
import { View, Text } from "react-native";
import { GeoPosition } from 'react-native-geolocation-service';
import {DailyRoute, IDailyRouteParams } from "./Daily";

export type PolylineParams = IDailyRouteParams

export type PolylineProps = {
    route: GeoPosition[]
    key: string
}

export const Polyline = (props: PolylineProps & PolylineParams)=>{
    
    const { route, type} = props

    const [featureCollectionLineString, setFeatureCollectionLineString] = useState<GeoJSON.FeatureCollection<GeoJSON.LineString>>({
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates: []
                }
            }
        ]
    })

    useEffect(()=>{

        const featureCollectionLineString_ = {...featureCollectionLineString}
        featureCollectionLineString_.features[0].geometry.coordinates = 
        route.map( ( {coords: {latitude, longitude}})=> [longitude, latitude] )
        setFeatureCollectionLineString(featureCollectionLineString_)

    },[route])


    switch (type) {
        case "Daily":
            return <DailyRoute {...props} featureCollectionLineString={featureCollectionLineString}/>
        default:
            break;
    }
    return (
        <></>
    )
}