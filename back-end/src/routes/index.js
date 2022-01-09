const user = require('./auth')
const adminUser = require('./admin/auth')
const category = require('./category')
const product  = require('./product')
const cart  = require('./cart')


function routes(app){
    app.use('/api/admin',adminUser)
    app.use('/api',product)
    app.use('/api',cart)
    app.use('/api',category)
    app.use('/api',user)
}

module.exports = routes