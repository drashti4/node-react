let NodeFS = require('./src/node-fs')
let objFS = new NodeFS();
const TEST_FILE_NAME = 'test.json';
const assert = require('assert');

const TEST_DATA = [
    { id: 100, userName: 'mvachon', age: 12 },
    { id: 101, userName: 'jcote', age: 66 },
    { id: 102, userName: 'pmartineau', age: 99 }
];

console.log(objFS.readFrom('JSONData.txt'));

let result = objFS.readDataWithID('JSONData.txt',100);
assert.deepStrictEqual(result,{ id: 10, userName: 'mvachon', age: 12 }); // false because both id is not same.

objFS.saveTo('JSONData.txt',JSON.stringify(TEST_DATA));
let insert_data ={ id: 104, userName: 'Drashti', age: 20 };
objFS.addData ('JSONData.txt', insert_data);
let update_data ={ id: 104, userName: 'Bhumit', age: 20 };
objFS.updateData('JSONData.txt', update_data);






