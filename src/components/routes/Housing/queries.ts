import { gql } from '@apollo/client'

export const CALCULATE_ELECTRICITY = gql`
   query Electricity($kWh: Float) {
      electricity(kWh: $kWh) {
         footprint
      }
   }
`

export const CALCULATE_NATURAL_GAS = gql`
   query NaturalGas($therms: Float) {
      naturalGas(therms: $therms) {
         footprint
      }
   }
`

export const CALCULATE_FUEL_OIL = gql`
   query FuelOil($litres: Float) {
      fuelOil(litres: $litres) {
         footprint
      }
   }
`

export const CALCULATE_LPG = gql`
   query LPG($litres: Float) {
      LPG(litres: $litres) {
         footprint
      }
   }
`

export const CALCULATE_WASTE = gql`
   query Waste($kg: Float) {
      waste(kg: $kg) {
         footprint
      }
   }
`

export const CALCULATE_WATER = gql`
   query Water($galons: Float) {
      water(galons: $galons) {
         footprint
      }
   }
`
