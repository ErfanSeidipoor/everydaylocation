import Realm from "realm";

import { DaySchema, DayMigration } from './Day'
import { GeoCoordinatesSchema, GeoCoordinatesMigration } from './GeoCoordinates'
import { GeoPositionSchema, GeoPositionMigration } from './GeoPosition'

export default ({
    schema: [GeoCoordinatesSchema, GeoPositionSchema, DaySchema ],
    schemaVersion: 3,
    migration: (oldRealm:Realm, newRealm:Realm)=>{
        DayMigration(oldRealm, newRealm)
        GeoCoordinatesMigration(oldRealm, newRealm)
        GeoPositionMigration(oldRealm, newRealm)
    },
})