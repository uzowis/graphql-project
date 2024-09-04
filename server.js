const path = require('path');
const express = require('express');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { ApolloServer } = require('apollo-server-express');

const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer(){
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs : typeArray,
        resolvers : resolversArray
    });

    // Initialize Apollo Server
    const server = new ApolloServer({
        schema
    });

    // Start Apollo Server
    await server.start();
    // Connect Apollo server to express inorder to respond to requests.
    server.applyMiddleware({app, path: "/graphql"});
    


    // Express endpoint
    app.get('/', (req, res)=>{
        res.send('<h1>Welcome to my Express API </h1>');
    });
    
    // Start express server
    app.listen(3000, ()=>{
        console.log('Server running at port 3000');
    });
}
startApolloServer();