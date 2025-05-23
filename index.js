//import the express module
const express = require('express');

//import the hello router
// const helloRouter = require('./routes/hello'); 

//import the mongoose module
const mongoose = require('mongoose');


//Define the port number on which the server will listen on

const PORT = 3000;

//Create an instance of express application
//because it gives us the starting point to create our server

const app = express();

// mogodb string
const DB = "mongodb+srv://mohammadaliyasin:Yasin77800@cluster0.wfrgo8l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



//middleware - to register routes or to mount the routes
//this is where we register the hello router
//this tells express to use the helloRouter for any requests to the "/hello" endpoint

// app.use(helloRouter);

// example while running in the index.js file

// app.get('/hello',(req,res) => {
//     res.send('Hello World!');
// });


//connect to the MongoDB database using mongoose
mongoose.connect(DB)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

//start the server and listen on the specified port
app.listen(PORT,"0.0.0.0" ,() => {
  console.log(`Server is running on port ${PORT}`);
});