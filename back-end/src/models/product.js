const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    slug : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    quantity :{
        type :Number,
        require:true
    },
    description : {
        type : String,
        require : true,
        trim :true
    },
    offer : {
        type : Number
    },
    productImgs : [
        {
            img : String
        }
    ],
    reviews :[
        {
            userId :{
                type :  mongoose.Schema.Types.ObjectId,
                ref :"User"
            },
            review : String

        }
    ],
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required :true
    },
    createBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required :true
    }

},{
    timestamps : true
})


module.exports = mongoose.model('Product',productSchema)