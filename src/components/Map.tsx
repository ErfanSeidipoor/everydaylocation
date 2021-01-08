import React from "react";
import { View, Text} from "react-native";
import { MapboxGL } from "./MapboxGL";

export interface MapProps  { 
    children?: React.ReactNode
}

export const Map = (
    {
        children
    }
    :MapProps
) => {

	return (
        <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Outdoors}
            pitchEnabled={false}
            rotateEnabled={false}
            style={{flex: 1}}
        >
            <MapboxGL.Camera
                zoomLevel={10}
                centerCoordinate={[51.4, 35.7]}
                animationMode={'flyTo'}
                animationDuration={0}
            >
            </MapboxGL.Camera>
            {children}
        </MapboxGL.MapView>
	)

}