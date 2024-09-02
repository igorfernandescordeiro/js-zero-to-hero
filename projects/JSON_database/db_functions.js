const fs = require('fs');

function readDb(dbName = 'db.json'){
    // read JSON object from file
    const data = fs.readFileSync(dbName, 'utf-8');


    // parse te JSON from JSON to object and return it
        // const converted_data = JSON.parse(data);
        // return converted_data;

    return JSON.parse(data);

};


function writeDb(obj, dbname = 'db.json') {
    // check that a user has passed in an object
    if (!obj){
        return
    }

    try {
            // convert our object to the JSON format
            let converted_data = JSON.stringify(obj);
        fs.writeFileSync(dbname, converted_data);
        console.log('Data saved')
            // save JSON to our JSON database
    } catch (error) {
        console.log('Failed to save data\n', error.message);
    }
  


};

module.exports = {
    readDb, writeDb
}