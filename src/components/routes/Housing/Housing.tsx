import React, { useState } from 'react'
import { Card, InputNumber, Form, Button } from 'antd'

import { CardContainer, Container } from './Housing.styled'
import SidePanel from './SidePanel'

const formItems = [
   {
      name: 'electricity',
      title: 'How much electricity (in kWh) do you use a year?',
      emoji: '🔌',
   },
   {
      name: 'naturalGas',
      title: 'How many therms of natural gas do you use in a year? ',
      emoji: '🔥',
   },
   { name: 'fuelOil', title: 'How many litres of fuel / oil do you use a year?', emoji: '🛢️' },
   {
      name: 'LPG',
      title: 'How many litres of liquefied petroleum gas do you use in a year?',
      emoji: '⛽',
   },
   {
      name: 'waste',
      title: 'How many kilograms of trash do you produce a year?',
      emoji: '🗑️',
   },
   {
      name: 'water',
      title: 'How many gallons of water do you consume (drink/lawn/dishwasher/washer/etc.) a year?',
      emoji: '🚰',
   },
]

const Housing: React.FC = () => {
   const [form] = Form.useForm()
   const [formData, setFormData] = useState(null)

   const onFinish = (formRes: any) => {
      setFormData(formRes)
   }
   return (
      <Container>
         <Card style={{ height: '836px', width: '100%', borderRadius: '4px' }}>
            <h1>Calculate Food Carbon Footprint</h1>
            <CardContainer>
               <Form form={form} onFinish={onFinish}>
                  {formItems.map(({ name, title, emoji }) => (
                     <>
                        <p>{`${emoji} ${title}`}</p>
                        <Form.Item name={name}>
                           <InputNumber />
                        </Form.Item>
                     </>
                  ))}
                  <Button htmlType="submit" size="large">
                     Submit
                  </Button>
               </Form>
            </CardContainer>
         </Card>
         <SidePanel formData={formData || {}} />
      </Container>
   )
}

export default Housing
