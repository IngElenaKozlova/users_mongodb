import { Server } from "socket.io"
const { v4: uuidv4 } = require('uuid')

// Сделать так что бы был сокет отправить список дата из файла one.ts 
// и так же удалить, редактировать, добавить 

// io.on - connection, socket.on - we get, io.emit - we send

export const createSocket = (server) => {
    const io = new Server(server, {
      cors: { origin: "*" }
    });

    io.on("connection", async (socket) => {
        io.emit("sendMessage", "Hello user!");   
      })      
}
 