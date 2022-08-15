require('dotenv').config();
const validator = require('validator');
const User = require('../models/User');


exports.register = async (req, res, next) =>{

    try {
        const {name, email, password} = req.body;
        // return res.send(password)
    
        let foundEmail = await User.findOne({ email: email });

        // Check if user already exists
        if (foundEmail) {
            return res.status(400).json({
                success: false,
                error: "User already exists!"
            });
        } 
        //  Here we validate the user email 
        if (!validator.isEmail(email) || !name) {
            return res.status(401).json({
                success: false,
                error: "Invalid credintials"
            });    
        }
        // Validating length of the password
        if(!(password.length >= 4)){
            return res.status(400).json({
                success: false,
                error: "Select atleast four images"
            });    
        }
        // return res.send(req.body)
        const userData = new User({
            name,
            email,
            password: password.toString()
        });
        // Store data Into Database
        await userData.save();
        res.status(201).json({
            success: true,
            userData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
    
}

exports.login = async (req, res, next) =>{
    try {
            //  Get value from user 
            const {email, password} = req.body;
        
            const foundUser = await User.findOne({ email: email });
    
            if(!foundUser){
                return res.status(400).json({
                    success: false,
                    error: "you've not been registered yet"
                });
            }
    
            const isMatch = await bcrypt.compare(password.toString(), foundUser.password)
            if(!isMatch){
                return res.status(401).json({
                    success: false,
                    error: "Incorrect password!"
                });
            }
            res.status(201).json({
                success: true,
                token: "gfuyv"
            });    
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
}