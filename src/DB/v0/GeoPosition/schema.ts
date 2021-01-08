import { ObjectSchema} from "realm";

import {
    GEOPOSITION_SCHEMA,
    GEOCOORDINATES_SCHEMA
} from "../../constant";

export const GeoPositionSchema:ObjectSchema = {

	name: GEOPOSITION_SCHEMA,
	
	properties: {
		coords: {
			type: GEOCOORDINATES_SCHEMA,
        },
        timestamp: {
            type: 'int',
        },
        mocked: {
            type: 'bool',
            optional: true
        }
	}
}