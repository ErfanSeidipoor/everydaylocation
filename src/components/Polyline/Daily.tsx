import React from "react";
import { MapboxGL } from "../MapboxGL";
import { PolylineProps } from "./index";
 

export interface IDailyRouteParams {
    type: "Daily",
}

export const DailyRoute = (
    props: 
        IDailyRouteParams & 
        PolylineProps & 
        {featureCollectionLineString:GeoJSON.FeatureCollection<GeoJSON.LineString>}
) => {  
    
    const {
        featureCollectionLineString,
        key,
    } = props

    return (
        <MapboxGL.ShapeSource
            id={`ShapeSource ${key}`}
            shape={featureCollectionLineString}
        >
            <MapboxGL.LineLayer
                id={`LineLayer ${key}`}
                style={{
                    lineColor:'#00e',
                    lineWidth: 5, 
                    lineOpacity: 0.7,
                    lineBlur: 4,
                    lineGapWidth: 3
                }}
            />
        </MapboxGL.ShapeSource>
    )
}