import { writeFile, readFile } from 'fs/promises';

// const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const pathFile = './practice/data.json'

const todo = {
    name : "js",
    is : false,
    _id : 142131231
}

// createTodo
// removeTodo
// editTodo


const createTodo = async (name) => {
    const todo = {
        name,
        is : false,
        _id : uuidv4()
    }     
    try{  
        const dataJson = await readFile(pathFile, "utf8")
        const data = JSON.parse(dataJson)           
        data.push(todo)
        await writeFile(pathFile, JSON.stringify(data, null, 2))
    } catch (err) {
        console.log(err)
    }
}
// createTodo("Alex")


const removeTodo = async (_id) => {
    try{
        const dataJson = await readFile(pathFile, "utf8")
        const data = JSON.parse(dataJson)      
        const todoWthRemovedTodo = data.filter(todo => todo._id !== _id)
        await writeFile(pathFile, JSON.stringify(todoWthRemovedTodo, null, 2))
    } catch (err) {
        console.log(err)
    }
}
// removeTodo("35684cd3-1aec-4920-8c1a-aa591b022da2111")


const editTodo = async (_id, name, is) => {
    try{
        const dataJson = await readFile(pathFile, "utf8")
        const data = JSON.parse(dataJson)  
        const elem = data.find((todo) => todo._id === _id)
        elem.is = is;
        elem.name = name;
        await writeFile(pathFile, JSON.stringify(data, null, 2))
        
        // const editedTodo = data.map((todo) => {
        //     if (todo._id === _id) {
        //         return {_id, name, is}
        //     }
        //     return todo
        // })
        // await writeFile(pathFile, JSON.stringify(editedTodo, null, 2))
    } catch (err) {
        console.log(err)
    }
}
// editTodo("35684cd3-1aec-4920-8c1a-aa591b022da2", "Ben-"+Math.random().toFixed(4).slice(2), true)
