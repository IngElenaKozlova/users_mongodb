import {Message, OneMessage} from '../scheme/message.scheme'


export const createChatController = async (chatId : string, text : string) => {
    const messageInstance = new Message({
        _id : chatId,
        message : [ 
            {
                text 
            }
        ]
    })
    return await messageInstance.save()
}


export const sendMessageController = async (chatId : string, text : string) => {
    const newMessage = new OneMessage({
        text
    })

    const updatedChat = await Message.findByIdAndUpdate(
        chatId,
        { $push: { message: newMessage } },
        { new: true, runValidators: true }
    )
    return updatedChat
}


export const deleteOneMessageController = async (chatId : string, _id : string) => {
    const updatedChat = await Message.findByIdAndUpdate(
        chatId,
        { $pull: { message: { _id: _id } } },
        { new: true }
    )
    return updatedChat
}


export const updateMessageController = async (chatId : string, _id: string, text : string) => {
    const updatedChat = await Message.findOneAndUpdate(
        {  _id: chatId, "message._id": _id },
        { $set: { "message.$.text": text } },       
        { new: true, runValidators: true }          
    )
    return updatedChat
}








