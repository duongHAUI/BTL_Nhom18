const express = require('express')
const router = express.Router()

const authController= require('../controllers/AuthController')
const {authenticateLogin} = require('../middleware/authenticateLogin')

router.post('/login',authController.loginPost)



router.post('/register',authController.registerPost)

router.get('/profile',authenticateLogin,authController.getProfile)




// router.get('/profile',authenticateLogin,authController.getProfile)




module.exports = router