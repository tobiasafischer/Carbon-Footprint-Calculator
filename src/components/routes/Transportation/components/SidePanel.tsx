import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Card } from 'antd'
import styled from 'styled-components'
import {
   CALCULATE_VEHICLE,
   CALCULATE_BUS,
   CALCULATE_METRO,
   CALCULATE_TAXI,
   CALCULATE_RAIL,
   CALCULATE_FLYING,
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
   const { data: { vehicle } = {} } = useQuery(CALCULATE_VEHICLE, {
      variables: { miles: formData.vehicle },
   })
   const { data: { bus } = {} } = useQuery(CALCULATE_BUS, {
      variables: { miles: formData.bus },
   })
   const { data: { metro } = {} } = useQuery(CALCULATE_METRO, {
      variables: { miles: formData.metro },
   })
   const { data: { taxi } = {} } = useQuery(CALCULATE_TAXI, {
      variables: { miles: formData.taxi },
   })
   const { data: { rail } = {} } = useQuery(CALCULATE_RAIL, {
      variables: { miles: formData.rail },
   })
   const { data: { flying } = {} } = useQuery(CALCULATE_FLYING, {
      variables: { miles: formData.flying },
   })

   const round = (num: number) => Math.round(num * 100) / 100

   useEffect(() => {
      const footprintTotal =
         bus?.footprint + metro?.footprint + taxi?.footprint + rail?.footprint + flying?.footprint
      setFootprint(footprintTotal)
      setMilesDriven(Math.round(footprintTotal * 0.196974607))
   }, [bus, metro, taxi, rail, flying])

   return (
      <Card style={{ width: '40%', height: '836px', borderRadius: '4px' }}>
         <Totals>
            <h2>Your carbon footprint</h2>
            <h3>
               <strong>🏎️ Vehicle:</strong>
               &nbsp;
               {round(vehicle?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🚌 Bus:</strong>
               &nbsp;
               {round(bus?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🚃 Metro:</strong>
               &nbsp;
               {round(metro?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🚕 Taxi:</strong>
               &nbsp;
               {round(taxi?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🚆 Rail:</strong>
               &nbsp;
               {round(rail?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>
               <strong>🛩️ Flying:</strong>
               &nbsp;
               {round(flying?.footprint || 0)}
               &nbsp; kgCO2e/yr
            </h3>
            <h3>{`Your total footprint is ${footprint || 0} kgCO2e/yr!`}</h3>
            <h3>{`This is equivalent to driving ${milesDriven || 0} miles`}</h3>
         </Totals>
      </Card>
   )
}

export default SidePanel
