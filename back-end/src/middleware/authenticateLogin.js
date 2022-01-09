const jwt = require('jsonwebtoken')
const User = require('../models/user')


const authenticateLogin = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const userId = verifyTonken(token)
        req.userId = userId
        next()
        
    } else {
        return res.status(401).json({ msg: 'Please login123 !' });
    }
}

const adminAuthenticationLogin = async (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(400).json({msg : "required to admin"})
    }
    next();
}
const userAuthenticationLogin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    if(!user){
        return res.status(400).json({msg : "please! login"})
    }
    req.user = user
    next();
}








const signTonken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET)
}
const verifyTonken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
    authenticateLogin,
    signTonken,
    verifyTonken,
    adminAuthenticationLogin,
    userAuthenticationLogin
}