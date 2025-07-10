require('dotenv').config()
import express from 'express'
const mongoose = require('mongoose');
const usersRoute = require('../routes/users')


const start = async () => {
    const port = +process.env.PORT || 3000;
    const host = process.env.HOST || '127.0.0.1'; 
    const app = express();
    const connectURL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@usersmongodb.7qfjiva.mongodb.net/`
    await mongoose.connect(connectURL)
    app.use(express.json());
    // console.log(response)
    
    app.use('/users', usersRoute)

    app.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}`) 
    })
}


start()


