const express= require('express')

const router =express.Router()
const cryptoController = require('../Controller/cryptoController')

router.get("/cryptocoin",cryptoController.getData)

module.exports=router