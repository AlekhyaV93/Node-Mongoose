const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = "mongodb://localhost:27017/nucampsite/";

//connecting to the db server by passing the conncetion string
const connect = mongoose.connect(url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(()=>{
    console.log("Connected to the server");

    //instantiating the Campsite model
    const newCampsite = new Campsite({
        name: 'React Lake Campground',
        description: 'test'
    })

    newCampsite.save()
    .then(campsite => {
        console.log(campsite);
        return Campsite.find();//using the static method 'find' of the model 
    })
    .then(campsite=>{
        console.log(campsite);
        return Campsite.deleteMany();//using the static method 'deleteMany' of the model 
    })
    .then(()=>{
        return mongoose.connection.close();//closing the connection
    })
    .catch((err)=>{
        console.log(err);
        mongoose.connection.close();
    })


})