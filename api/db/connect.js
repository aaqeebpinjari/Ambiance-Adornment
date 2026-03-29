const mongoose = require("mongoose");

uri = "mongodh-key";



const connectDB = () =>{
    console.log("connect db established")

    
    return mongoose.connect(uri, {
        useNewUrlParserL: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;
