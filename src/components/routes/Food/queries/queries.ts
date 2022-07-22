import { gql } from '@apollo/client'

export const CALCULATE_RED_MEAT = gql`
   query RedMeat($cal: Float) {
      redMeat(cal: $cal) {
         footprint
      }
   }
`

export const CALCULATE_WHITE_MEAT = gql`
   query WhiteMeat($cal: Float) {
      whiteMeat(cal: $cal) {
         footprint
      }
   }
`

export const CALCULATE_DAIRY = gql`
   query Dairy($cal: Float) {
      dairy(cal: $cal) {
         footprint
      }
   }
`

export const CALCULATE_CEREAL = gql`
   query Cereals($cal: Float) {
      cereals(cal: $cal) {
         footprint
      }
   }
`

export const CALCULATE_VEGETABLES = gql`
   query Vegetables($cal: Float) {
      vegetables(cal: $cal) {
         footprint
      }
   }
`

export const CALCULATE_FRUIT = gql`
   query Fruit($cal: Float) {
      fruit(cal: $cal) {
         footprint
      }
   }
`

export const CALCULATE_OILS = gql`
   query Oils($cal: Float) {
      oils(cal: $cal) {
         footprint
      }
   }
`

export const CALCULATE_SNACKS = gql`
   query Snacks($cal: Float) {
      snacks(cal: $cal) {
         footprint
      }
   }
`

export const CALCULATE_DRINKS = gql`
   query Drinks($cal: Float) {
      drinks(cal: $cal) {
         footprint
      }
   }
`
