const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// Mongo db Atlas Dashboard

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true ,useCreateIndex:true})
// Second args: jut add 
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("Mongo Db databse connection is established")
});
const userRouter = require('./routes/users');
const exercisesRouter =  require('./routes/exercises');

app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);
app.listen(port, (req,res)=> {
    console.log(`Server is listening at port ${port}`)
})