const { readDb, writeDb } = require("./db_functions");

const dataObj = {
    name: 'igor',
    numbers : [1,23,3,4]
}

writeDb(dataObj);

console.log(readDb());