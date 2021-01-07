const { ApolloServer, PubSub } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers/index');

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
