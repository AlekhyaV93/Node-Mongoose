const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = "mongodb://localhost:27017/nucampsite";

//connecting to the db server by passing the conncetion string
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {
    console.log("Connected to the server");

    //instantiating the Campsite model
    //using create method instead of instantiating the model
    Campsite.create({
        name: 'React Lake Campground',
        description: 'test'
    })
        .then(campsite => {
            console.log(campsite);

            return Campsite.findByIdAndUpdate(campsite._id, {
                $set: { description: "Updated" }
            },
                {
                    new: true
                });//using the static method 'findByIdAndUpdate' of the model to update a field of the document
        })
        .then(campsite => {
            console.log(campsite);
            //pushing a subdocument
            campsite.comments.push({
                rating: 5,
                text: 'What a magnificent view!',
                author: 'Tinus Lorvaldes'
            })
            return campsite.save();

        })
        .then(campsite => {
            console.log(campsite);
            return Campsite.deleteMany();//using the static method 'deleteMany' of the model 
        })
        .then(() => {
            return mongoose.connection.close();//closing the connection
        })
        .catch((err) => {
            console.log(err);
            mongoose.connection.close();
        })


})