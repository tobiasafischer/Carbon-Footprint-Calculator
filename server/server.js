const { ApolloServer, gql } = require('apollo-server-express')
const cors = require('cors')
const express = require('express')
const { resolvers } = require('./schema/resolvers/resolvers.js')
const { typeDefs } = require('./schema/typeDefs.js')

const app = express()
app.use(cors())

const server = new ApolloServer({
   typeDefs,
   resolvers,
   uri: 'http://localhost:4000/graphql',
})
server.start().then(() =>
   server.applyMiddleware({
      app,
      cors: false,
   }),
)
app.listen(4000, () => {
   console.log('🚀  Server ready at 4000')
})
