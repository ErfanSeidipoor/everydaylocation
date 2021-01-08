import { createContext } from "react";
import { GeoPosition } from 'react-native-geolocation-service';


export const Context = createContext<{
    geoPositions: GeoPosition[],
}>({
    geoPositions:[]
})
