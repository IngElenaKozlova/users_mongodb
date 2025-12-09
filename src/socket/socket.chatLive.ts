import { LiveChat } from "../../scheme/livechat.scheme"
import { messageSocketT, responseMDBDelete, responseMongoDb, responseSocket } from "./socketT"


export const sendMessageDb = async (name : string, text : string) : responseSocket => {
    try {
        const newMessageChat = new LiveChat({
            name,
            text,
            date : Date.now()
        })

        const result : messageSocketT = await newMessageChat.save()
        return {ok : true, data : result}
        
    } catch (error) {
        return {ok : false, error : error}
    }

}

export const getAllMessagesDb = async () : responseMongoDb => {
    try {
        const dataChat = await LiveChat.find({});
        return {ok : true, data : dataChat}  
    } catch (error) {
        return {ok : false, error : error}
    }

};

export const deleteMessageDb = async (_id: string, name : string) : responseMDBDelete => {
    try {
      const oneMessage = await LiveChat.findById(_id)
      if(oneMessage.name !== name) return {ok: false, error: "Неправильное имя пользователя"}

      const deletedChat = await LiveChat.findByIdAndDelete(_id)
      if (!deletedChat) return {ok: false, error: "Чат не найден"}
      return { ok: true, _id };
      
    } catch (err) {
      return { ok: false, error: "Ошибка сервера" };
    }
  };