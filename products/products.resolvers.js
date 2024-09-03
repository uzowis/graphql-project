const { getAllProducts } = require('./products.model');

module.exports = {
    Query : {
        products : () => {
            console.log('Getting Products....');
            return getAllProducts()
    }
}}
