import { gql } from '@apollo/client'

export const CALCULATE_VEHICLE = gql`
   query Vehicle($miles: Float) {
      vehicle(miles: $miles) {
         footprint
      }
   }
`

export const CALCULATE_BUS = gql`
   query Bus($miles: Float) {
      bus(miles: $miles) {
         footprint
      }
   }
`

export const CALCULATE_METRO = gql`
   query Metro($miles: Float) {
      metro(miles: $miles) {
         footprint
      }
   }
`

export const CALCULATE_TAXI = gql`
   query Taxi($miles: Float) {
      taxi(miles: $miles) {
         footprint
      }
   }
`

export const CALCULATE_RAIL = gql`
   query Rail($miles: Float) {
      rail(miles: $miles) {
         footprint
      }
   }
`

export const CALCULATE_FLYING = gql`
   query Flying($miles: Float) {
      flying(miles: $miles) {
         footprint
      }
   }
`
