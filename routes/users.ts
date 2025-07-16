const {Router} = require("express")
const router = Router()
const schemaUser = require('../scheme/user.scheme')
import {getIsValidNumber, getIsValidPassword} from '../src/validation'


// import controlerShop from '../control/shop'
// import { responseError } from '../errors/error';
// import { middlewarAccessToShop, middlewarAdminAccess } from '../middlewar/middlewar';


router.post('/createUser', async (req, res) => {
    try{   
        const userInstance = new schemaUser(req.body)
        const response = await userInstance.save()

        // console.log(response)
            // .then(doc => {
            //     console.log('Document was saved:', doc)

            // })
            // .catch(err => {
            //     console.error('Error in saving:', err)
            // })

        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.get('/getUser/:id', async (req, res) => {
    try{   
        const userId = req.params.id
        const user = await schemaUser.findById(userId)
        return res.status(200).json(user)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.get('/getUsers', async (req, res) => {
    try{   
        const {page, count} = req.body

        const pageValidation = getIsValidNumber(page)
        if (!pageValidation) return res.status(409).json('page is not a number') 
        const countValidation = getIsValidNumber(count)
        if (!countValidation) return res.status(409).json('count is not a number')

        const users = await schemaUser.find().skip((page-1)*count).limit(count)
        return res.status(200).json(users)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.post('/editUser/:id', async (req, res) => {
    try{   
        const userId = req.params.id

        const editedUser = await schemaUser.findByIdAndUpdate(
            userId,
            req.body,
            { new: true, runValidators: true }
        )

        return res.status(200).json(editedUser)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.post('/editUserPassword/:id', async (req, res) => {
    try{   
        const userId = req.params.id

        const passwordValidation = getIsValidPassword(req.body.password)
        if (!passwordValidation) return res.status(409).json('password is not acceptable') 

        const editedPasswordUser = await schemaUser.findByIdAndUpdate(
            userId,
            req.body,
            { new: true, runValidators: true }
        )

        return res.status(200).json(editedPasswordUser)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


router.delete('/deleteUser/:id', async (req, res) => {
    try{   
        const userId = req.params.id
        const deletedUser = await schemaUser.findByIdAndDelete(userId)
        return res.status(200).json(deletedUser)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})




module.exports = router