import {Message, OneMessage} from '../scheme/message.scheme'
import { faker } from '@faker-js/faker'
const {Router} = require("express")
const router = Router()


router.post('/createChat', async (req, res) => {
    try{   
        const idFrom = req.headers.id
        const idTo = req.body.clientId
        
        if (idFrom.trim() === "" || idTo.trim() === "") return { text: "id is not correct" }
               
        const chatId = idFrom > idTo ? idFrom + "-" + idTo : idTo + "-" + idFrom

        const messageInstance = new Message({
            _id : chatId,
            message : [ 
                {
                    text : req.body.text
                }
            ]
        })

        const response = await messageInstance.save()

        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.post('/sendMessage', async (req, res) => {
    try{   
        const idFrom = req.headers.id
        const idTo = req.body.clientId
        
        if (idFrom.trim() === "" || idTo.trim() === "") return { text: "id is not correct" }
               
        const chatId = idFrom > idTo ? idFrom + "-" + idTo : idTo + "-" + idFrom

        //! if chat does not exist

        const newMessage = new OneMessage({
            text : req.body.text
        })

        const updatedChat = await Message.findByIdAndUpdate(
            chatId,
            { $push: { message: newMessage } },
            { new: true, runValidators: true }
        )

        return res.status(200).json(updatedChat)


    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.post('/sendRandomMessage', async (req, res) => {
    try{   
        const idFrom = req.headers.id
        const idTo = req.body.clientId
        
        if (idFrom.trim() === "" || idTo.trim() === "") return { text: "id is not correct" }
               
        const chatId = idFrom > idTo ? idFrom + "-" + idTo : idTo + "-" + idFrom

        const chat = await Message.findById(chatId)
        if (!chat)  return { text: "chat is not found" }

        const newRandomMessages = Array.from({ length: 40 }).map(() => ({
            text: faker.lorem.sentence()        
        }))

        chat.message.push(...newRandomMessages)
        await chat.save()

        return res.status(200).json(chat)


    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})



module.exports = router



// const id1 = 'sada-sadsad-sadsa-sadsa-sad';
// const id2 = 'sada-sadsad-sadsa-sadsa-sad';

// 'client1-client2'
// ''