const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Creating an instance

const userSchema = new Schema({
    username: {
        // validations to the schema
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3 // 3 chars long

    },
}, {
    timestamps:true,
    // Automatically create mestamps for when it was created and 
}
);

const User= mongoose.model('User', userSchema)
// Name we are going to use
module.exports= User;