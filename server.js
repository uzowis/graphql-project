const path = require('path');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));


const app = express();

const schema = makeExecutableSchema({
    typeDefs : typeArray,
    resolvers : resolversArray
});

const rootValue = {
    products : require('./products/products.model'),
    orders : require('./orders/orders.model')
};

const graphqlHTTPOptions = {
    schema,
    graphiql: true
}


app.use('/graphql', graphqlHTTP(graphqlHTTPOptions));






app.get('/', (req, res)=>{
    res.send('<h1>Welcome to my Express API </h1>');
});



app.listen(3000, ()=>{
    console.log('Server running at port 3000');
})