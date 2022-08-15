require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('connected to mongodb!'))
    .catch(err => console.error('Something went wrong', err));
}

module.exports = connectDB;


