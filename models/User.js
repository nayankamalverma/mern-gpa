const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const UserSchema = new Schema({

    name:{
        type: String,
        required: [true, "Please enter a name"],
        minlength:[3, "name field atleast have 3 character"],
        maxlength:30
       
    },
    email: {
        type: String,
        required: [true, "Please enter a email"],
        minlength: 5,
        maxlength: 255,
        unique: true

    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre('save', async function(next){
    const user = this;
    if (this.isModified("password") || this.isNew) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
})

module.exports = mongoose.model('User', UserSchema);