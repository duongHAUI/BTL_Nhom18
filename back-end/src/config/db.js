const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.m9gfi.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`


async function connect(){
    
    try {
        await mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        console.log('successfully db!');
    } catch (error) {
        console.log('err db');
    }
}

module.exports = {connect}