const { ApolloServer } = require('apollo-server-express')
require('@testing-library/jest-dom')

const { resolvers } = require('../schema/resolvers/resolvers.js')
const { typeDefs } = require('../schema/typeDefs.js')

it('runs housing calculations', async () => {
   const testServer = new ApolloServer({
      typeDefs,
      resolvers,
   })

   const electricity = await testServer.executeOperation({
      query: `
      query Electricity($kWh: Float) {
         electricity(kWh: $kWh) {
            footprint
         }
      }
   `,
      variables: { kWh: 10000 },
   })

   expect(electricity.errors).toBeUndefined()
   expect(electricity.data.electricity.footprint).toBe(7000)

   const naturalGas = await testServer.executeOperation({
      query: `
      query NaturalGas($therms: Float) {
         naturalGas(therms: $therms) {
            footprint
         }
      }
   `,
      variables: { therms: 10000 },
   })

   expect(naturalGas.errors).toBeUndefined()
   expect(naturalGas.data?.naturalGas.footprint).toBe(66000)

   const fuelOil = await testServer.executeOperation({
      query: `
      query FuelOil($litres: Float) {
         fuelOil(litres: $litres) {
            footprint
         }
      }
   `,
      variables: { litres: 10000 },
   })

   expect(fuelOil.errors).toBeUndefined()
   expect(fuelOil.data?.fuelOil.footprint).toBe(116000)

   const LPG = await testServer.executeOperation({
      query: `
      query LPG($litres: Float) {
         LPG(litres: $litres) {
            footprint
         }
      }
   `,
      variables: { litres: 10000 },
   })

   expect(LPG.errors).toBeUndefined()
   expect(LPG.data?.LPG.footprint).toBe(68000)

   const waste = await testServer.executeOperation({
      query: `
      query Waste($kg: Float) {
         waste(kg: $kg) {
            footprint
         }
      }
   `,
      variables: { kg: 10000 },
   })

   expect(waste.errors).toBeUndefined()
   expect(waste.data?.waste.footprint).toBe(200)

   const water = await testServer.executeOperation({
      query: `
      query Water($galons: Float) {
         water(galons: $galons) {
            footprint
         }
      }
   `,
      variables: { galons: 10000 },
   })

   expect(water.errors).toBeUndefined()
   expect(Math.round(water.data?.water.footprint)).toBe(14)
})
