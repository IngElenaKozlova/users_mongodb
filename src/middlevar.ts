import { nextTick } from 'process'
import {Message, OneMessage} from '../scheme/message.scheme'
const {Router} = require("express")
const router = Router()


export const middlevarExistChat = async (req, res, next) => {
    const idFrom = req.headers.id
    const idTo = req.body.clientId
           
    const chatId = idFrom > idTo ? idFrom + "-" + idTo : idTo + "-" + idFrom
    
    const chat = await Message.findById(chatId)
    if (!chat)  {
        return res.status(404).json({ text: "chat is not found" })
    }

    next()
}


