const server = require ('express') ();
const bodyParser = require ('body-parser');
const {graphqlExpress, graphiqlExpress} = require ('apollo-server-express');
const {makeExecutableSchema} = require ('graphql-tools');

const typeDefs = 'type Query {hey:String!}';

const resolvers = {
  Query: {
    hey: () => 'hey there',
  },
};

const schema = makeExecutableSchema ({
  typeDefs,
  resolvers,
});

server.use (bodyParser);
server.use ('/graphql', graphqlExpress ({schema}));
server.use ('/gq', graphiqlExpress ({endpointURL: '/graphql'}));

server.listen (3000, () => {
  console.log ('lisening on port 3000');
});
