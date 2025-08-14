import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
 

const userSchema = new Schema({  

    name : { 
        type : String, 
        required: true,     
        trim: true,             
        minlength: 2,           
        maxlength: 100   
    },

    age: {
        type: Number,
        min: 0,              
        max: 120,              
        default: 0    
    },

    email: {
        type: String,  
        required: true,
        unique: true,           
        lowercase: true,        
        match: [/\S+@\S+\.\S+/, 'Invalid email format'] 
    },

    createdAt: {
        type: Date, 
        required: true,  
        default: Date.now       
    },

    password: {
        type : String, 
        required: true,   
        trim: true, 
        minlength: 5,           
        maxlength: 15
    }
  });


  export const User = mongoose.model('User', userSchema)

  module.exports = User
  
  




  