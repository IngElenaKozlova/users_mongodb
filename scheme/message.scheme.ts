import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
 

const messageOneSchema = new Schema({ 

    text : { 
        type : String, 
        required: true,     
        trim: true,             
        minlength: 2,           
        maxlength: 100   
    },

    date: {
        type: Date, 
        required: true,  
        default: Date.now       
    }
})

const messageSchema = new Schema({

    _id : {
        type : String,
        required: true,
        trim: true, 
        minlength: 2
    },

    message : [messageOneSchema]

  })


 export const Message = mongoose.model('Message', messageSchema)

 export const OneMessage = mongoose.model('OneMessage', messageOneSchema)







// const id1 = 'clientid1'
// const id2 = 'clientid2'
// let createId = ''
// if(id1 > id2) {
//     createId = id1 + '-' + id2
// } else {
    
//     createId = id2 + '-' + id1
// }

// console.log(createId)

//  const e = [
    
//     {
//         'idClient2-idclient' : [{text : 'sadsa', date : 'UNIX', id : 'client'},{text : 'hi', date : 'UNIX', id : 'client2'}],
//         'idClient3' : [{text : 'sadsa', date : 'UNIX'}],
//     },
//   ]


//   const messages = {
//     'idClient2-idclient' : {
//         _id : 'idClient2-idclient',
//         message : []
//     },
//     'idClient3-idclient4' : [],
//     'idClient3-idclient5' : [],
//   }

//   if('hello' < 'some'){

//   }


