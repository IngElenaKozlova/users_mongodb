const {Router} = require("express")
const router = Router()
const schemaUser = require('../scheme/user.scheme')


// import controlerShop from '../control/shop'
// import { responseError } from '../errors/error';
// import { middlewarAccessToShop, middlewarAdminAccess } from '../middlewar/middlewar';


router.post('/createUser', async (req, res) => {
    try{   
        const userInstance = new schemaUser(req.body)

        const response = await userInstance.save();

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
        const userId = req.params.id;
        const user = await schemaUser.findById(userId)

        return res.status(200).json(user)

    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})


module.exports = router