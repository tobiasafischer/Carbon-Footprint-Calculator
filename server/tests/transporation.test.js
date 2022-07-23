const { ApolloServer } = require('apollo-server-express')
require('@testing-library/jest-dom')

const { resolvers } = require('../schema/resolvers/resolvers.js')
const { typeDefs } = require('../schema/typeDefs.js')

it('runs transportation', async () => {
   const testServer = new ApolloServer({
      typeDefs,
      resolvers,
   })

   const vehicle = await testServer.executeOperation({
      query: `
      query Vehicle($miles: Float) {
         vehicle(miles: $miles) {
            footprint
         }
      }
   `,
      variables: { miles: 10000 },
   })

   expect(vehicle.errors).toBeUndefined()
   expect(Math.round(vehicle.data.vehicle.footprint)).toBe(3443)

   const bus = await testServer.executeOperation({
      query: `
      query Bus($miles: Float) {
         bus(miles: $miles) {
            footprint
         }
      }
   `,
      variables: { miles: 10000 },
   })

   expect(bus.errors).toBeUndefined()
   expect(bus.data?.bus.footprint).toBe(530)

   const metro = await testServer.executeOperation({
      query: `
      query Metro($miles: Float) {
         metro(miles: $miles) {
            footprint
         }
      }
   `,
      variables: { miles: 10000 },
   })

   expect(metro.errors).toBeUndefined()
   expect(metro.data?.metro.footprint).toBe(990)

   const taxi = await testServer.executeOperation({
      query: `
      query Taxi($miles: Float) {
         taxi(miles: $miles) {
            footprint
         }
      }
   `,
      variables: { miles: 10000 },
   })

   expect(taxi.errors).toBeUndefined()
   expect(taxi.data?.taxi.footprint).toBe(4132)

   const rail = await testServer.executeOperation({
      query: `
      query Rail($miles: Float) {
         rail(miles: $miles) {
            footprint
         }
      }
   `,
      variables: { miles: 10000 },
   })

   expect(rail.errors).toBeUndefined()
   expect(rail.data?.rail.footprint).toBe(1130)

   const flying = await testServer.executeOperation({
      query: `
      query Flying($miles: Float) {
         flying(miles: $miles) {
            footprint
         }
      }
   `,
      variables: { miles: 10000 },
   })

   expect(flying.errors).toBeUndefined()
   expect(flying.data?.flying.footprint).toBe(1449.7)
})
