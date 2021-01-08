import Realm from "realm";
import schema0 from './v0'

const schemas = [
    schema0
]

console.log('Realm.defaultPath :', Realm.defaultPath)

let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);

console.log("nextSchemaIndex > ", nextSchemaIndex)
console.log("Realm.defaultPath > ", Realm.defaultPath)

if (nextSchemaIndex !== -1) {
    while (nextSchemaIndex < schemas.length) {
        const migratedRealm = new Realm(schemas[nextSchemaIndex++]);
        migratedRealm.close();
    }
}

export default Realm.open( schemas[schemas.length-1] )