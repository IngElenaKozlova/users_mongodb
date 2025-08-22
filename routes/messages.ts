import { Message, OneMessage } from '../scheme/message.scheme'
import { createChatController, sendMessageController, deleteOneMessageController, updateMessageController } from '../controllers/messagesControllers'
import { getIsValidChatId } from '../utils/validation'
import { middlevarExistChat } from '../src/middlevar'
import { faker } from '@faker-js/faker'
const { Router } = require("express")
const router = Router()


router.post('/createChat', async (req, res) => {
    try{   
        const idFrom = req.headers.id
        const idTo = req.body.clientId
        const text = req.body.text
        
        const chatId = await getIsValidChatId(idFrom, idTo)
        if (chatId.isError) return res.status(400).json({text : chatId.text})

        const response = await createChatController(chatId.text, text)

        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.post('/sendMessage', middlevarExistChat, async (req, res) => {
    try{   
        const idFrom = req.headers.id
        const idTo = req.body.clientId
        const text = req.body.text
        
        const chatId = await getIsValidChatId(idFrom, idTo)
        if (chatId.isError) return res.status(400).json({text : chatId.text})

        const response = await sendMessageController(chatId.text, text)

        return res.status(200).json(response)
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
        if (!chat)  return res.status(404).json({ text: "chat is not found" })

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


router.delete('/deleteOneMessage', middlevarExistChat, async (req, res) => {
    try{   
        const idFrom = req.headers.id
        const idTo = req.body.clientId
        const _id = req.body.messageId
        
        const chatId = await getIsValidChatId(idFrom, idTo)
        if (chatId.isError) return res.status(400).json({text : chatId.text})

        const response = await deleteOneMessageController(chatId.text, _id)

        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.post('/editOneMessage', middlevarExistChat, async (req, res) => {
    try{   
        const idFrom = req.headers.id
        const idTo = req.body.clientId
        const text = req.body.text
        const _id = req.body._id
        
        const chatId = await getIsValidChatId(idFrom, idTo)
        if (chatId.isError) return res.status(400).json({text : chatId.text})

        const response = await updateMessageController(chatId.text, _id, text)

        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})





// remove more message [id,id,id]
// remove chat 


module.exports = router


