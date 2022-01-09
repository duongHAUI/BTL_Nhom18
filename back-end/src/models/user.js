const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
        min : 3
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        min : 3
    },
    fullName : {
        type :String,
        
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    hash_password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['user','admin'],
        default : 'user'
    },
    phone : {
        type : String
    },
    avatar : {
        type : String,
    }
},{
    timestamps : true
})

// userSchema.virtual('fullName')
// .get(function(){
//     return `${this.firstName} ${this.lastName}`
// })
// userSchema.virtual('fullName')
// .set(function(){
//     this.fullName `${this.firstName} ${this.lastName}`
// })

userSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password,10)
})


userSchema.methods = {
    authenticate : function (password){
        return bcrypt.compareSync(password,this.hash_password)
    }
}

module.exports = mongoose.model('User',userSchema)