const {Router} = require("express")
const router = Router()
import { createUserController, getUserByIdController, getUsersController, editUserByIdController, editUserPasswordController, deleteUserByIdController } from '../controllers/usersControllers'
import {getIsValidNumber, getIsValidPassword} from '../utils/validation'



router.post('/createUser', async (req, res) => {
    try{   
        console.log('---start---')
        const response = await createUserController(req.body)
        console.log('---start--- 2')
        console.log()
        
        return res.status(200).json(response)

    } catch (e){
        console.log('------------------Error---------------------')
        console.log(e)
        return res.status(500).json(e.errorResponse)
    }
})


router.get('/getUser/:id', async (req, res) => {
    try{   
        const userId = req.params.id
        const response = await getUserByIdController(userId)
        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.get('/getUsers', async (req, res) => {
    try{   
        const {page, count} = req.body

        const pageValidation = getIsValidNumber(page)
        if (pageValidation.isError) return res.status(400).json({text : pageValidation.text})

        const countValidation = getIsValidNumber(count)
        if (countValidation.isError) return res.status(400).json({text : countValidation.text})

        const response = await getUsersController(page, count)
        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.post('/editUser/:id', async (req, res) => {
    try{   
        const userId = req.params.id
        const response = await editUserByIdController(userId, req.body)
        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.post('/editUserPassword/:id', async (req, res) => {
    try{   
        const userId = req.params.id

        const passwordValidation = getIsValidPassword(req.body.password)
        if (passwordValidation.isError) return res.status(400).json({text : passwordValidation.text})

        const response = await editUserPasswordController(userId, req.body)
        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.delete('/deleteUser/:id', async (req, res) => {
    try{   
        const userId = req.params.id
        const response = await deleteUserByIdController(userId)
        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})




module.exports = router