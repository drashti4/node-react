let NodeFS = require('./src/node-fs')
let objFS = new NodeFS();
const TEST_FILE_NAME = 'test.json';
const assert = require('assert');
const FILENAME = 'JSONData.json';
const TEST_DATA = [
    { id: 100, userName: 'mvachon', age: 12 },
    { id: 101, userName: 'jcote', age: 66 },
    { id: 102, userName: 'pmartineau', age: 99 }
];

// Saving data
objFS.saveTo(FILENAME,JSON.stringify(TEST_DATA));

// Inserting data
let insert_data ={ id: 104, userName: 'Drashti', age: 20 };
objFS.addData (FILENAME, insert_data);

// Updating data
let update_data ={ id: 104, userName: 'Bhumit', age: 20 };
objFS.updateData(FILENAME, update_data);

// Reading all data
console.log(objFS.readFrom(FILENAME));

// Reading single data with ID
let result = objFS.readDataWithID(FILENAME,100);
assert.deepStrictEqual(result,{ id: 10, userName: 'mvachon', age: 12 }); // false because both id is not same.






