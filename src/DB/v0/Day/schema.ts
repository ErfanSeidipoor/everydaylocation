import { ObjectSchema} from "realm";
import { DAY_SCHEMA, GEOPOSITION_SCHEMA} from "../../constant";

export const DaySchema:ObjectSchema = {

    name: DAY_SCHEMA,
	
	properties: {
		date: {
			type: 'date',
        },
        geoPositions: {
            type: 'list',
            objectType: GEOPOSITION_SCHEMA
        }
	}
}