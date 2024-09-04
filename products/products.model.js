const products = [ 
    {
        id : 'redShoe',
        description : 'Red Adidas Shoe',
        price : 40,
        reviews : [
            {
                rating : 5,
                comment : 'Very nice shoe, perfect fit'
            },
            {
                rating : 4.5,
                comment : 'Amazing nice shoe, Fast Delivery'
            },
        ],
    },
    {
        id : 'whiteShirt',
        description : ' White colored Primart Men\'s shirt',
        price : 25,
        reviews : [
            {
                rating : 4,
                comment : 'Nice material, perfect fit'
            },
            {
                rating : 3,
                comment : 'Quality not as expected, Fast Delivery'
            },
        ],
    },
    {
        id : 'goldShoe',
        description : ' Golden boot for football',
        price : 40,
        reviews : [],
    }

]

function getAllProducts(){
    return products;
}
function getProductByPrice(min, max){
    return products.filter((product) =>{
        return product.price >=min && product.price <= max;
    });
}

function getProductById(id){
    return products.filter((product) =>{
        return product.id === id;
    });
}

function addNewProduct(id, description, price){
    const newProduct = {
        id,
        description,
        price,
        reviews : []
    }
    products.push(newProduct);
    return newProduct;
}
function addProductReview(id, rating, comment){
    const matchedProduct = getProductById(id);
 
    if(matchedProduct){
         const newProductReview = {
             rating,
             comment
         }
         
         matchedProduct[0].reviews.push(newProductReview);
         return newProductReview
    }
    
 
 }

module.exports = {
    getAllProducts,
    getProductByPrice,
    getProductById,
    addNewProduct,
    addProductReview
}