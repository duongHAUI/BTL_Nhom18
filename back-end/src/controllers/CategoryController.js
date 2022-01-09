const Category  = require('../models/category')
const slugify  = require('slugify')


function getListCategories(categories, parentId = null){
    let listCategories = [];
    let category;
    if(parentId==null){
        category = categories.filter(cate => cate.parentId == undefined)
    }else{
        category = categories.filter(cate => cate.parentId == parentId)
    }

    for(let cate of category){
        listCategories.push({
            _id : cate._id,
            name: cate.name,
            slug : cate.slug,
            children : getListCategories(categories,cate._id)
        })
    }
    return listCategories
}

class CategoryController{

    // GET Category [GET]
    async getCategory (req,res){
        try {
            const categories = await Category.find()

            const listCategories = getListCategories(categories)

            res.json({categories : listCategories})
        } catch (error) {
            res.json(error.message)
        }
    }







    // ADD Category [POST]

    async createCategory(req,res){
        try {
            const checkSlug = await Category.findOne({slug : slugify(req.body.name)})
            if(checkSlug){
                return res.status(400).json({msg : 'Namesake category! '})
            }
            const categoryObj = {
                name : req.body.name,
                slug : slugify(req.body.name),
                
            }
            if(req.file){
                categoryObj.categoryImg = process.env.API + "/public/" +  req.file.filename ;
            }
            if(req.body.parentId){
                categoryObj.parentId = req.body.parentId
            }
            const newCategory = await new Category(categoryObj)
            await newCategory.save()
            return res.json({msg : 'Created category successfully!', category :newCategory })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }


}


module.exports  = new CategoryController