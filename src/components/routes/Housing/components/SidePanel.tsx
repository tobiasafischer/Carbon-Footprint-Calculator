import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Card } from 'antd'
import styled from 'styled-components'
import {
   CALCULATE_WATER,
   CALCULATE_WASTE,
   CALCULATE_LPG,
   CALCULATE_FUEL_OIL,
   CALCULATE_NATURAL_GAS,
   CALCULATE_ELECTRICITY,
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
   const { data: { electricity } = {} } = useQuery(CALCULATE_ELECTRICITY, {
      variables: { miles: formData.electricity },
   })
   const { data: { naturalGas } = {} } = useQuery(CALCULATE_NATURAL_GAS, {
      variables: { miles: formData.naturalGas },
   })
   const { data: { fuelOil } = {} } = useQuery(CALCULATE_FUEL_OIL, {
      variables: { miles: formData.fuelOil },
   })
   const { data: { LPG } = {} } = useQuery(CALCULATE_LPG, {
      variables: { miles: formData.LPG },
   })
   const { data: { waste } = {} } = useQuery(CALCULATE_WASTE, {
      variables: { miles: formData.waste },
   })
   const { data: { water } = {} } = useQuery(CALCULATE_WATER, {
      variables: { miles: formData.water },
   })

   const round = (num: number) => Math.round(num * 100) / 100

   useEffect(() => {
      const footprintTotal =
         electricity?.footprint +
         naturalGas?.footprint +
         fuelOil?.footprint +
         LPG?.footprint +
         water?.footprint +
         waste?.footprint
      setFootprint(footprintTotal)
      setMilesDriven(Math.round(footprintTotal * 0.196974607))
   }, [electricity, naturalGas, fuelOil, LPG, water, waste])

   return (
      <Card style={{ width: '40%', height: '836px', borderRadius: '4px' }}>
         <Totals>
            <h2>Your carbon footprint</h2>
            <h3>
               <strong>🔌 Electricity:</strong>
               &nbsp;
               {round(electricity?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🔥 Natural Gas:</strong>
               &nbsp;
               {round(naturalGas?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🛢️ Fuel / Oil:</strong>
               &nbsp;
               {round(fuelOil?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>⛽ LPG:</strong>
               &nbsp;
               {round(LPG?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🗑️ Waste:</strong>
               &nbsp;
               {round(waste?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🚰 Water:</strong>
               &nbsp;
               {round(water?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>{`Your total footprint is ${footprint || 0} kgCO2e/yr!`}</h3>
            <h3>{`This is equivalent to driving ${milesDriven || 0} miles`}</h3>
         </Totals>
      </Card>
   )
}

export default SidePanel
