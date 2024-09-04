const { 
    addNewProduct,
    addProductReview,
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
    },
    Mutation : {
        addNewProduct : (_, args) => {
            return addNewProduct(args.id, args.description, args.price);
        },
        addProductReview : (_, args) => {
            return addProductReview(args.id, args.rating, args.comment);
        }
    }
}
