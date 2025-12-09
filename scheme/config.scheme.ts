import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const configSchema = new Schema({  

    speed : { 
        type : Number, 
        required: true,                 
        min: 0,           
        max: 100   
    },

    typeSpeed: {
        type: String,
        required: true,   
        trim: true,             
        minlength: 2,           
        maxlength: 100     
    },
  })


  export const Config = mongoose.model('Config', configSchema)

  module.exports = Config
  
  