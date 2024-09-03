const { 
    getAllProducts,
    getProductByPrice,
    getProductById
    } = require('./products.model');

module.exports = {
    Query : {
        products : () => {
            return getAllProducts()
        },
        productByPrice : (_, args) => {
            return getProductByPrice(args.min, args.max)
        },
        productById : (_, args) => {
            return getProductById(args.id)
        }
}}
