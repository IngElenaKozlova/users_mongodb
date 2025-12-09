import { data } from "./data"

// Сделать список пользователей в форме 

const messagesArray = () => {
    const messages = []
    for (const key in data) {
        const {name, _id} = data[key]
        const newChat = {
            name : name,
            chat_id : _id
        }
        messages.push(newChat)
    } 
    return messages
}

// for in  
// import export 

// add ts

// Delete
// Edit 
// Create 
//! Добавить файл систем, что бы все сохранялось в файлы 

// any methods array 






