import React from "react";
import { GeoPosition } from 'react-native-geolocation-service'; 


import NormalPoint, { INormalPointParams } from "./Normal";
import SpecialPoint, { ISpecialPointParams } from "./Special";

export type PointParams  = 
    INormalPointParams |
    ISpecialPointParams

export type PointGeneralProps = {
    coordinate: GeoPosition
    key: string
    calloutTitle: string
}

export const Point = ( props: PointGeneralProps & PointParams)=>
{

    switch (props.type) {
        case "NORMAL":
            return <NormalPoint {...props}/>
        case "SPECIAL":
            return <SpecialPoint {...props} /> 
        default:
            break;
    }

    return <></>

} 
