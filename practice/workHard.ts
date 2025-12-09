import { writeFile, readFile, unlink, readdir } from 'fs/promises'

const { v4: uuidv4 } = require('uuid')
const pathFile = './practice/datas/'

const createTodo = async (name) => {
    const todo = {
        name,
        is : false,
        _id : uuidv4()
    }     
    try{         
        await writeFile(pathFile + todo._id + '.json', JSON.stringify(todo, null, 2))
    } catch (err) {
        console.log(err)
    }
}
//createTodo("Alex")


const removeTodo = async (_id) => {   
    try{     
        const pathFileToRemove = pathFile + _id + '.json'
        await unlink(pathFileToRemove)
    } catch (err) {
        console.log(err)
    }
}
//removeTodo("ed94263a-e149-48c6-a724-9ef9da54a931")


const editTodo = async (user) => {
    const editedTodo = {
        name : user.name,
        is : user.is,
        _id : user._id
    }     
    try{         
        await writeFile(pathFile + editedTodo._id + '.json', JSON.stringify(editedTodo, null, 2))
    } catch (err) {
        console.log(err)
    }
}
//editTodo({_id : "a20a37d5-cee2-4c6c-bafd-26c9828fb008", name : "Ben", is : true})


// page = 1 limit = 2

const getAllTodos = async (page, limit) => {
    try {
        const allTodos = await readdir(pathFile)
        const allTodosArr = []

        // for (const todo of allTodos) {
        //     const pathTodo = pathFile + todo
        //     const oneTodo = await readFile(pathTodo, "utf8")
        //     allTodosArr.push(oneTodo)
        // }

        for (let todo = (page - 1) * limit; todo < page * limit; todo++) {
        // for (let todo = 2; todo < 4; todo++) {
            const element = allTodos[todo]
            const pathTodo = pathFile + element
            const oneTodo = await readFile(pathTodo, "utf8")
            allTodosArr.push(oneTodo)          
        }

        console.log(allTodosArr)
        return allTodosArr
    } catch (err) {
        console.log(err)
    }
}
//getAllTodos(1, 2)


//! for while alternative resolve