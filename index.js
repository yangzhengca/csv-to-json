const express = require('express')

let csvToJson = require('convert-csv-to-json');

const app = express()



app.listen(5000,()=>{
    console.log('Server running on port 5000 ...')   
})


//Convert .csv file to json obj array
let myJson = csvToJson.fieldDelimiter('\t').getJsonFromCsv("./tree_data.csv");

console.log(myJson)

//welcome page http://localhost:5000/
app.get('/',(req,res)=>{
    res.json('Welcome to my api server')
})

//get all data http://localhost:5000/nodes
app.get('/nodes',(req,res)=>{
    res.json(myJson)
})

//create a new data http://localhost:5000/nodes
app.post('/nodes',(req,res)=>{

})

//updata a data http://localhost:5000/nodes/:id
app.patch('/nodes/:id',(req,res)=>{

})

//delete a data http://localhost:5000/nodes/:id
app.delete('/nodes/:id',(req,res)=>{
    
})


// //Convert .csv file to db.json file
// let fileInputName = './tree_data.csv'; 
// let fileOutputName = './db.json';

// csvToJson.fieldDelimiter('\t').generateJsonFileFromCsv(fileInputName,fileOutputName);