
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const registerschema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error ("email is not valid");
            }
        }
    },
    contact:{
        type:String,
        required:true,
        maxlength:10,
        unique:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    },
    cpassword:{
        type:String,
        required:true,
        minlength:6
    },
    token:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ],carts:Array
})

// password hash

registerschema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password =await bcrypt.hash(this.password,12);
        this.cpassword =await bcrypt.hash(this.cpassword,12);

    }
    next();
})

//token generator



const model = mongoose.model('registerdata',registerschema);


module.exports = model;