const mongoose = require('mongoose');

//Defining the IUser schema
const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    hashedPassword:{
        type: String,
        required: true
    },
    accountType:{
        type: String,
        required: true
    },
})

const IUser = mongoose.model('IUser', userSchema);

module.exports = IUser;