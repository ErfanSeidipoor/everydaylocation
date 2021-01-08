import { IDB_GeoPosition } from "./GeoPosition";

export interface IDB_Day {
    date:Date
    geoPositions: IDB_GeoPosition[]
}