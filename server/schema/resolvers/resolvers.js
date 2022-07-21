const calculations = require('./calculations.js')

const resolvers = {
   Query: calculations,
}

module.exports = { resolvers }
