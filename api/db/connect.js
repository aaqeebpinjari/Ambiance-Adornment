const mongoose = require("mongoose");

uri = "mongodb+srv://admin:owI6lNSYGcxhI5F3@cluster0.9icw4qv.mongodb.net/cluster0?retryWrites=true&w=majority";



const connectDB = () =>{
    console.log("connect db established")

    
    return mongoose.connect(uri, {
        useNewUrlParserL: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDB;