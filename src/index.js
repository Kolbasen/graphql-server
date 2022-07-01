const { createServer, createPubSub } = require('@graphql-yoga/node');
const { readFileSync } = require('fs');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const { PrismaClient } = require('./generated/prisma-client-js');

const typeDefs = readFileSync(require.resolve('./schema.graphql')).toString('utf-8');
const prisma = new PrismaClient();

const resolvers =  {
    Query,
    Mutation,
    Subscription,
};

const pubsub  = createPubSub();

const server = createServer({
    schema: {
        typeDefs,
        resolvers,
    },
    context: { prisma, pubsub },
});

server.start();
