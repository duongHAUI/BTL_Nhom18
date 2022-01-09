const Cart = require('../models/cart')
const slugify = require('slugify');
const { loginPost } = require('./AuthController');

class CategoryController {

    // GET Category [GET]
    async getCategory(req, res) {
        
    }







    // ADD Category [POST]

    async addCart(req, res) {
        try {
            const { productId, quantity, price } = req.body;
            const cart = await Cart.findOne({ userId: req.user._id })
            if (cart) {
                const findProductId = cart.productItems.find(product => product.productId == productId)
                console.log(findProductId);
                if (findProductId) {
                    await Cart.findOneAndUpdate({ userId: req.user._id , "productItems.productId" : productId }, {
                        "$set": {
                            "productItems.$": {
                                productId,
                                quantity :Number(findProductId.quantity) + Number(quantity) ,
                                price 
                            }
                        }
                    })
                }else{
                    await Cart.findOneAndUpdate({ userId: req.user._id }, {
                        "$push": {
                            "productItems": {
                                productId,
                                quantity,
                                price
                            }
                        }
                    })
                }


            } else {
                const newCart = new Cart({
                    userId: req.user._id,
                    productItems: [
                        {
                            productId,
                            quantity,
                            price
                        }
                    ]
                });
                await newCart.save()
            }
            res.json({ msg: "Add product to Cart successfully!", carr: req.body })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }


}


module.exports = new CategoryController