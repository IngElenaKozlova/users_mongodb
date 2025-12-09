import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
 
const liveChatSchema = new Schema({ 

    name : { 
        type : String, 
        required: true,     
        trim: true,             
        minlength: 2,           
        maxlength: 100   
    },

    text : { 
        type : String, 
        required: true,     
        trim: true,             
        minlength: 2,           
        maxlength: 100   
    },

    date: {
        type: Date, 
        default: Date.now       
    }
})

export const LiveChat = mongoose.model('LiveChat', liveChatSchema)

