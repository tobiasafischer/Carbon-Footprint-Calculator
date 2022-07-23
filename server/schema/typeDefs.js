const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
   type Footprint {
      footprint: Float!
   }

   type Query {
      electricity(kWh: Float): Footprint
      naturalGas(therms: Float): Footprint
      fuelOil(litres: Float): Footprint
      LPG(litres: Float): Footprint
      waste(kg: Float, isRecycled: Boolean, type: String): Footprint
      water(galons: Float): Footprint

      vehicle(miles: Float): Footprint
      bus(miles: Float): Footprint
      metro(miles: Float): Footprint
      taxi(miles: Float): Footprint
      rail(miles: Float): Footprint
      flying(miles: Float): Footprint

      redMeat(cal: Float): Footprint
      whiteMeat(cal: Float): Footprint
      dairy(cal: Float): Footprint
      cereals(cal: Float): Footprint
      vegetables(cal: Float): Footprint
      fruit(cal: Float): Footprint
      oils(cal: Float): Footprint
      snacks(cal: Float): Footprint
      drinks(cal: Float): Footprint
   }
`
module.exports = { typeDefs }
