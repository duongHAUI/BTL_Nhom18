const Product  = require('../models/product')
const slugify  = require('slugify')

class ProductController{
    // ADD Product [POST]
    async createProduct(req,res){
        try {
            // console.log(req.files,req.user,req.body);
            const {
                name ,
                price,
                description ,
                categoryId,
                quantity
            } = req.body;
            // console.log(price);
            // let productImgs = [];
            // if(req.files.length > 0){
            //     productImgs = req.files.map(img=>{
            //         return {img : img.filename}
            //     })
            // }
            console.log(productImgs);
            const product = new Product({
                name ,
                slug : slugify(name),
                price,
                quantity,
                description ,
                // productImgs : productImgs,
                categoryId,
                createBy : req.user._id
            })
            await product.save();
            res.json({
                msg : "created new product successfully",
                product : product
            })

        } catch (error) {
            res.status(500).json(error.message)
        }
    }


}


module.exports  = new ProductController