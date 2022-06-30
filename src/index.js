const { createServer } = require('@graphql-yoga/node');
const { readFileSync } = require('fs');
const Query = require('./resolvers/Query');

const typeDefs = readFileSync(require.resolve('./schema.graphql')).toString('utf-8');

const resolvers =  {
    Query,
};

const server = createServer({
    schema: {
        typeDefs,
        resolvers,
    },
});

server.start();
