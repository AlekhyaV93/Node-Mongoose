const mongoose = require('mongoose');
const Schema=mongoose.Schema;//using the schema function of the mongoose

//defining a schema with fields, their data types and any constraints
const campsiteScheme = new Schema({
    name:{
        type:"string",
        required:true,
        unique:true
    },
    description:{
        type:"string",
        required:true
    }
},{
    timestamps:true
})

//creating a model that uses this schema for the documents in 'campsites' collection
const Campsite = new mongoose.model('Campsite',campsiteScheme);

module.exports = Campsite;//exporting the model