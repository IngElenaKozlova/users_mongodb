const { Router } = require("express")
const router = Router()
import { getConfigController } from '../controllers/configControllers'

router.get('/getConfig', async (req, res) => {
    try{   
        const config = req.body
        const response = await getConfigController(config)
        return res.status(200).json(response)
    } catch (e){
        return res.status(500).json(e.errorResponse)
    }
})

module.exports = router