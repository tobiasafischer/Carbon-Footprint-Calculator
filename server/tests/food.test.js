const { ApolloServer } = require('apollo-server-express')
require('@testing-library/jest-dom')

const { resolvers } = require('../schema/resolvers/resolvers.js')
const { typeDefs } = require('../schema/typeDefs.js')

it('runs food calculations', async () => {
   const testServer = new ApolloServer({
      typeDefs,
      resolvers,
   })

   const redMeat = await testServer.executeOperation({
      query: `
      query RedMeat($cal: Float) {
         redMeat(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(redMeat.errors).toBeUndefined()
   expect(redMeat.data.redMeat.footprint).toBe(56721)

   const whiteMeat = await testServer.executeOperation({
      query: `
      query WhiteMeat($cal: Float) {
         whiteMeat(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(whiteMeat.errors).toBeUndefined()
   expect(whiteMeat.data?.whiteMeat.footprint).toBe(9198)

   const dairy = await testServer.executeOperation({
      query: `
      query Dairy($cal: Float) {
         dairy(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(dairy.errors).toBeUndefined()
   expect(dairy.data?.dairy.footprint).toBe(19162.5)

   const cereals = await testServer.executeOperation({
      query: `
      query Cereals($cal: Float) {
         cereals(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(cereals.errors).toBeUndefined()
   expect(Math.round(cereals.data?.cereals.footprint)).toBe(2129)

   const vegetables = await testServer.executeOperation({
      query: `
      query Vegetables($cal: Float) {
         vegetables(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(vegetables.errors).toBeUndefined()
   expect(vegetables.data?.vegetables.footprint).toBe(2190)

   const fruit = await testServer.executeOperation({
      query: `
      query Fruit($cal: Float) {
         fruit(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(fruit.errors).toBeUndefined()
   expect(fruit.data?.fruit.footprint).toBe(2774)

   const oils = await testServer.executeOperation({
      query: `
      query Oils($cal: Float) {
         oils(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(oils.errors).toBeUndefined()
   expect(oils.data?.oils.footprint).toBe(2628)

   const snacks = await testServer.executeOperation({
      query: `
      query Snacks($cal: Float) {
         snacks(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(snacks.errors).toBeUndefined()
   expect(snacks.data?.snacks.footprint).toBe(2253.51)

   const drinks = await testServer.executeOperation({
      query: `
      query Drinks($cal: Float) {
         drinks(cal: $cal) {
            footprint
         }
      }
   `,
      variables: { cal: 10000 },
   })

   expect(drinks.errors).toBeUndefined()
   expect(drinks.data?.drinks.footprint).toBe(868.7)
})
