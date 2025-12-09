require('dotenv').config()
import express from 'express'
import { createSocket } from './socket/socket';
const mongoose = require('mongoose');
const usersRoute = require('../routes/users')
const messagesRoute = require('../routes/messages')
const configRoute = require('../routes/config')
import cors from "cors";

const start = async () => {
    const port = +process.env.PORT || 3000;
    const host = process.env.HOST || '127.0.0.1'; 
    const app = express();
    const connectURL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@usersmongodb.7qfjiva.mongodb.net/`
    await mongoose.connect(connectURL)
    app.use(express.json());
    app.use(cors({
        origin: "*"  // или можно указать точный адрес фронта
      }));
    
    app.use('/users', usersRoute)
    app.use('/messages', messagesRoute)
    app.use('/config', configRoute)

    const server = app.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}`) 
    })
    createSocket(server)
}

// const con = {
//     speed : 1000,
//     typeSpeed : 'kb'
// }


start()


