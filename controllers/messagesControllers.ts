import {Message, OneMessage} from '../scheme/message.scheme'


export const createChatController = async (chatId, text) => {
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


export const sendMessageController = async (chatId, text) => {
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


export const deleteOneMessageController = async (chatId, _id) => {
    const updatedChat = await Message.findByIdAndUpdate(
        chatId,
        { $pull: { message: { _id: _id } } },
        { new: true }
    )
    return updatedChat
}


