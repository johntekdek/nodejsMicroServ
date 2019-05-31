const server = require ('express') ();
const bodyParser = require ('body-parser');
const {ApolloServer, gql} = require ('apollo-server');
const {makeExecutableSchema} = require ('graphql-tools');

const typeDefs = gql` 
        type Course {
          title : String,
          author: String,
          description:String,
          url:String
        }
        type Query{
          courses:[Course]
        }

`;

const resolvers = {
  Query: {
    courses: () => courses,
  },
};

const server = new ApolloServer ({typeDefs, resolvers});

server.listen (3000, () => {
  console.log ('lisening on port 3000');
});
