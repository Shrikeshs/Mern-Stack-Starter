const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Creating an instance

const userSchema = new Schema({
    username: { type:String, required:true },
    description : {type:String, required:true},
    duration : {type:Number, required:true},
    date :{type:Date,required:true},
}, {
    timestamps:true,
    // Automatically create mestamps for when it was created and 
}
);

const Exercise= mongoose.model('Exercise', userSchema)
// Name we are going to use
module.exports= Exercise;