const express = require('express');
const { buildSchema} = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = buildSchema(`
    type Query {
        products : [Product!]
        orders : [Order]
    }

    type Product {
        id : ID!
        description : String!
        price : Float!
        reviews : [Review]

    }
    
    type Review {
        rating : String
        comment : String
    }
    
    type Order {
        date : String!
        subtotal : Float
        items : [OrderItem!]
    }
    
    type OrderItem {
        product : Product!
        quantity : Int!
        price : Float!
    }

`);

const rootValue = {
    products :[ 
        {
            id : 'redShoe',
            description : ' Red Adidas Shoe',
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
        }
    ],

    orders : [
        {   
            date : '20-08-2024',
            subtotal : 200,
            items : [
                {
                    product : {
                        id : 'redShoe'
                    },
                    quantity : 2,
                    price : 45
                },
                {
                    product : {
                        id : 'whiteShirt'
                    },
                    quantity : 3,
                    price : 22
                }
            ]

        },
        {   
            date : '05-06-2023',
            subtotal : 100,
            items : [
                {
                    product : {
                        id : 'whiteShirt'
                    },
                    quantity : 5,
                    price : 22
                }
            ]

        }
    ]
}
const graphqlHTTPOptions = {
    schema,
    rootValue,
    graphiql: true
}


app.use('/graphql', graphqlHTTP(graphqlHTTPOptions));






app.get('/', (req, res)=>{
    res.send('<h1>Welcome to my Express API </h1>');
});



app.listen(3000, ()=>{
    console.log('Server running at port 3000');
})