let csvToJson = require('convert-csv-to-json');

//Convert .csv file to db.json file
let fileInputName = './tree_data.csv'; 
let fileOutputName = './db.json';

csvToJson.fieldDelimiter('\t').generateJsonFileFromCsv(fileInputName,fileOutputName);


// //Convert .csv file to json obj array
// const json = csvToJson.fieldDelimiter('\t').getJsonFromCsv("./tree_data.csv");

// console.log(json)