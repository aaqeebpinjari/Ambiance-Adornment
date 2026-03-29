require("dotenv").config();
const express = require ("express");
const app = express();

const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");


app.get("/" , (req , res ) => {
    res.send("Hi, i am live");
})


// setting the middleware or set the router
app.use("/api/products", products_routes);

const start = async () =>{
    try{
        await connectDB();
        app.listen( PORT, () =>{
            console.log(`${PORT} yes i am connected to server`)  ;
        }) 
    }
    catch(error)
    {
        console.log(error);
    }
}
start();
// procdedure for connecting the express js with  the server..