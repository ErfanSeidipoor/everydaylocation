import React from "react";
import { MapboxGL } from "../MapboxGL";
import { View, Text } from "react-native";
import { PointGeneralProps } from "./index";

export interface ISpecialPointParams {
    type: "SPECIAL"
    string: string
}

export default (
    {
        string,
        coordinate,
        calloutTitle,
        key
    }:PointGeneralProps & ISpecialPointParams
)=> {
    return (
        <MapboxGL.PointAnnotation
            key={key}
            id={`id=${key}`}
            coordinate={coordinate}
        >
            <View
                style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: 50,
                    borderWidth: 50,
                    borderColor:"#00f3",
                }}
            >
                <View
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: 'orange',
                        borderWidth: 5,
                        borderColor: 'white',
                        transform: [{ scale: 1 }],
                        display: "flex"
                    }}
                >
                    <Text
                        style={{
                            flex: 1,
                            textAlign:"center",
                            lineHeight: 30,
                        }}
                    >{`${string}`}</Text> 
                </View>
            </View>
            <MapboxGL.Callout title={calloutTitle} />
        </MapboxGL.PointAnnotation>
    )
}