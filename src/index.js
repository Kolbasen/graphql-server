const { createServer } = require('@graphql-yoga/node');
const { readFileSync } = require('fs');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const { PrismaClient } = require('./generated/prisma-client-js');

const typeDefs = readFileSync(require.resolve('./schema.graphql')).toString('utf-8');
const prisma = new PrismaClient();

const resolvers =  {
    Query,
    Mutation,
};

const server = createServer({
    schema: {
        typeDefs,
        resolvers,
    },
    context: { prisma },
});

server.start();
