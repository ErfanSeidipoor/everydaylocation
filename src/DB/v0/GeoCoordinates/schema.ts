import { ObjectSchema} from "realm";
import { GEOCOORDINATES_SCHEMA } from "../../constant";

export const GeoCoordinatesSchema:ObjectSchema = {

	name: GEOCOORDINATES_SCHEMA,
	
	properties: {
		latitude: {
			type: 'double',
        },
		longitude: {
			type: 'double',
        },
		accuracy: {
			type: 'double',
        },
		altitude: {
            type: 'double',
            optional: true
        },
		heading: {
            type: 'double',
            optional: true
        },
		speed: {
            type: 'double',
            optional: true
        },
		altitudeAccuracy: {
            type: 'double',
            optional: true
        },
	}
}