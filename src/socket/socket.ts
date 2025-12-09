import { Server } from "socket.io"
import { userSocketT, messageSocketT, messageT } from "./socketT"
const { v4: uuidv4 } = require('uuid')
import { Message } from "../../scheme/message.scheme"
import { deleteMessageDb, getAllMessagesDb, sendMessageDb } from "./socket.chatLive"


const users : userSocketT[] = []

//const chat : messageSocketT[] = []
// {name : 'Robert', text : 'sss', date : timeUNIX}
// io.on - connection, socket.on - we get, io.emit - we send

export const createSocket = (server) => {
    const io = new Server(server, {
      cors: { origin: "*" }
    });

    io.on("connection", async (socket) => {
    // connect
      console.log("✅ Пользователь подключился:", socket.id);
      const user : userSocketT = {
        id : socket.id,
        date : Date.now()
      }
      users.push(user);

      const getAllMessage = await getAllMessagesDb()

      if (getAllMessage.ok == false) return getAllMessage.error

      io.emit("getAllMessage", getAllMessage.data); 

      // events
      socket.on("sendMessage",async (message : messageT) => {
        console.log("📩 Получено сообщение:", message);

        const response = await sendMessageDb(message.name, message.text) 
        if (response.ok == false) return response.error

        io.emit("sendMessage", response.data);   
      })

      
      socket.on("deleteMessage", async ({_id, name}) => {
        console.log("❌ Удаляемое сообщение:", _id)
        const deletedMessage = await deleteMessageDb(_id, name)

        if (deletedMessage.ok == false) return deletedMessage.error
        console.log("Удаленное сообщение:", deletedMessage)

        io.emit("deleteMessage", deletedMessage._id)
      })

      
      socket.on("disconnect", () => {
        console.log("❌ Пользователь отключился:", socket.id);
        const indexUser : number = users.findIndex((user : userSocketT) => user.id === socket.id)
        if (indexUser == -1) return "Пользователь не найден"
        users.splice(indexUser, 1)
        console.log("Все подключенные пользователи:", users)
      })

    
    //   socket.on("message", (msg) => {
    //     console.log("📩 Получено сообщение:", msg);
    //     io.emit("message", msg); // отправляем всем
    //   });

    
        

      

    });
} 



const fun1 = (a,b,n) =>{

}



// const m = { _id: '691720616fb06e283404343a', name: 'User' };

// const  {messageId, name} = m;