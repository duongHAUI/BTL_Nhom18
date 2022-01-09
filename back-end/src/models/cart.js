const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId  : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    productItems : [
        {
            productId : {type : mongoose.Schema.Types.ObjectId , ref : "Product", required :true},
            quantity : {type : Number , default : 1 },
            price : {type  : Number ,required : true},
            status : {type : String , default : "Processing!"}
        }
    ]
},{
    timestamps : true
})


module.exports = mongoose.model('Cart',cartSchema)