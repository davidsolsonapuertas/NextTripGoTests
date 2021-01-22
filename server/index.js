const { ApolloServer, PubSub } = require('apollo-server-express');
const { graphqlUploadExpress } = require('graphql-upload');
const cors = require('cors');
const express = require('express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers/index');

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, pubsub }),
  uploads: false,
});

const app = express();

app.use(
  cors(),
  express.static('public'),
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 })
);

app.use('/static', express.static('public'));

server.applyMiddleware({ app });

module.exports = app;
