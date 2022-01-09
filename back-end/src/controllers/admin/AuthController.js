const User = require('../../models/user')
const { signTonken } = require('../../middleware/authenticateLogin');


class AuthController {

    // [POST] login
    async loginPost(req, res) {
        try {
            const { password, email } = req.body;
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(202).json({ msg: 'Email does not exist!' })
            }
            if (!user.authenticate(password)) {
                return res.status(400).json({ msg: "Incorrect password" })
            }
            const token = signTonken({ _id: user._id, role: user.role })
            res.cookie('refresh_token', token,{
                httpOnly: true,
                maxAge: 7*24*60*60*1000 // 7 days
            })
            res.json({ msg : "Login admin successfully!", token })
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    }

    // [POST] register
    async registerPost(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body;
            const checkUser = await User.findOne({ email })
            if (checkUser) {
                res.status(400).json({ msg: 'Email already exists!' })
            }
            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                fullName: `${firstName} ${lastName}`,
                role: 'admin'
            })
            await newUser.save();
            res.json({ msg: 'Created new admin successfully!', user: newUser })
        } catch (error) {
            res.status(500).json({msg : error.message})
        }
    }
}



module.exports = new AuthController