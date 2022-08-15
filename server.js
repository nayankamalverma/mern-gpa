require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const app = express();

// connect database
connectDB()

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Assets
app.use(express.static('public'))

app.use('/api/auth', require('./routes/auth'));

app.listen(PORT,()=>{
    
    console.log(`Server has started at port ${PORT}.`);
})