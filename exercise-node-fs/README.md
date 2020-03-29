In this exercise you will create of a reusable node module.

The module is a library that uses a disk drive to emulate a database which stores a persistent collection of JSON objects.

Information on FS can be found at W3 school FS
Instructions

1. Create the directory /05-node/exercise-node-fs
2. Initialize a NodeJs module
3. Create the following file structure and implement requirements:
        src/node-fs.js
            Implement the following methods:
              - saveTo(fileName, data)
                    use JSON.stringify + fs.writeFileSync
                    create the file if it doesn't exist
               - readFrom(fileName)
                    use JSON.parse + fs.readFileSync 
                - readDataWithID(fileName, id)
                    Only return the object with specified id otherwise throw
                    Throw exception "Element not found", if the index does not exist.
                - addData (fileName, data)
                    data includes id and whatever else.
                    if id doesn't exist yet, add it, otherwise throw
                    Throw exception "Element already exists", if the object already exists.
                - updateData (fileName, data)
                    data includes id and whatever else.
                    Modify the data with the specific id
                    Throw exception "Element not found", if the index does not exist.
        - index.js
        - test.js
            1. Write a test for each method.
            2. Use the test data below
            3. Test the presence of exceptions.
            4. Use assert for your test, specifically the following:
                - assert.deepStrictEqual
                - assert.throws
                - do look at the other ones

- Use the data shown below to run your test

- const TEST_FILE_NAME = 'test.json'

const TEST_DATA = [
   { id: 100, userName: 'mvachon', age: 12 },
   { id: 101, userName: 'jcote', age: 66 },
   { id: 102, userName: 'pmartineau', age: 99 }
]

