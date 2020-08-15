const mongoose = require('mongoose');
const Schema = mongoose.Schema;//using the schema function of the mongoose

const commentSchema = new Schema({
   rating:{
       type:Number,
       min:1,
       max:5,
       required:true
   } ,
   text:{
       required:true,
       type:String
   },
   author:{
    required:true,
    type:String
    }},{
        timestamps:true
    }
)

//defining a schema with fields, their data types and any constraints
const campsiteScheme = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments :[commentSchema]
}, {
    timestamps: true
})

//creating a model that uses this schema for the documents in 'campsites' collection
const Campsite = new mongoose.model('Campsite', campsiteScheme);

module.exports = Campsite;//exporting the model