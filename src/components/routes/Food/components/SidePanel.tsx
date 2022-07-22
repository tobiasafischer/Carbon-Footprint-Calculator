import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Card } from 'antd'
import styled from 'styled-components'
import {
   CALCULATE_RED_MEAT,
   CALCULATE_CEREAL,
   CALCULATE_DAIRY,
   CALCULATE_DRINKS,
   CALCULATE_FRUIT,
   CALCULATE_OILS,
   CALCULATE_SNACKS,
   CALCULATE_VEGETABLES,
   CALCULATE_WHITE_MEAT,
} from '../queries'

const Totals = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   gap: 25px;
`

const SidePanel: React.FC<{ formData: any }> = ({ formData }) => {
   const [milesDriven, setMilesDriven] = useState(0)
   const [footprint, setFootprint] = useState(0)
   const { data: { redMeat } = {} } = useQuery(CALCULATE_RED_MEAT, {
      variables: { cal: formData.redMeat },
   })
   const { data: { cereals } = {} } = useQuery(CALCULATE_CEREAL, {
      variables: { cal: formData.cereals },
   })
   const { data: { dairy } = {} } = useQuery(CALCULATE_DAIRY, {
      variables: { cal: formData.dairy },
   })
   const { data: { drinks } = {} } = useQuery(CALCULATE_DRINKS, {
      variables: { cal: formData.drinks },
   })
   const { data: { fruit } = {} } = useQuery(CALCULATE_FRUIT, {
      variables: { cal: formData.fruit },
   })
   const { data: { oils } = {} } = useQuery(CALCULATE_OILS, { variables: { cal: formData.oils } })
   const { data: { snacks } = {} } = useQuery(CALCULATE_SNACKS, {
      variables: { cal: formData.snacks },
   })
   const { data: { vegetables } = {} } = useQuery(CALCULATE_VEGETABLES, {
      variables: { cal: formData.vegetables },
   })
   const { data: { whiteMeat } = {} } = useQuery(CALCULATE_WHITE_MEAT, {
      variables: { cal: formData.whiteMeat },
   })

   const round = (num: number) => Math.round(num * 100) / 100

   useEffect(() => {
      const footprintTotal =
         redMeat?.footprint +
         whiteMeat?.footprint +
         dairy?.footprint +
         cereals?.footprint +
         vegetables?.footprint +
         fruit?.footprint +
         snacks?.footprint +
         drinks?.footprint
      setFootprint(footprintTotal)
      setMilesDriven(Math.round(footprintTotal * 0.196974607))
   }, [redMeat, whiteMeat, dairy, vegetables, snacks, drinks, fruit, cereals])

   return (
      <Card style={{ width: '40%', height: '900px', borderRadius: '4px' }}>
         <Totals>
            <h2>Your carbon footprint</h2>
            <h3>
               <strong>🐄 Red Meat:</strong>
               &nbsp;
               {round(redMeat?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🐔 White Meat:</strong>
               &nbsp;
               {round(whiteMeat?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🥛 Dairy:</strong>
               &nbsp;
               {round(dairy?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🥣 Cereals:</strong>
               &nbsp;
               {round(cereals?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🥕 Vegetables:</strong>
               &nbsp;
               {round(vegetables?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🍎 Fruit:</strong>
               &nbsp;
               {round(fruit?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🛢️ Oils:</strong>
               &nbsp;
               {round(oils?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🍪 Snacks:</strong>
               &nbsp;
               {round(snacks?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🥤 Drinks:</strong>
               &nbsp;
               {drinks?.footprint || 0}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>{`Your total footprint is ${footprint || 0} kgCO2e/yr!`}</h3>
            <h3>{`This is equivalent to driving ${milesDriven || 0} miles`}</h3>
         </Totals>
      </Card>
   )
}

export default SidePanel
