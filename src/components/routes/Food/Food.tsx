import React, { useState } from 'react'
import { Card, InputNumber, Form, Button } from 'antd'

import { CardContainer, Container } from './Food.styled'
import SidePanel from './SidePanel'

const formItems = [
   {
      name: 'redMeat',
      title: 'How much red meat (beef / lamb) (in calories) do you eat a day?',
      emoji: '🐄',
   },
   {
      name: 'whiteMeat',
      title: 'How much white meat (chicken / pork) (in calories) do you eat a day? ',
      emoji: '🐔',
   },
   { name: 'dairy', title: 'How much dairy (in calories) do you eat/drink a day?', emoji: '🥛' },
   {
      name: 'cereals',
      title: 'How much cereal (in calories) do you eat a day?',

      emoji: '🥣',
   },
   {
      name: 'vegetables',
      title: 'How many vegetables (in calories) do you eat a day?',
      emoji: '🥕',
   },
   { name: 'fruit', title: 'How much fruit (in calories) do you eat a day?', emoji: '🍎' },
   { name: 'oils', title: 'How much oil (in calories) do you use a day?', emoji: '🛢️' },
   { name: 'snacks', title: 'How much snacks (in calories) do you eat a day?', emoji: '🍪' },
   { name: 'drinks', title: 'How many drinks (in calories) do you drink a day?', emoji: '🥤' },
]

const Food: React.FC = () => {
   const [form] = Form.useForm()
   const [formData, setFormData] = useState(null)

   const onFinish = (formRes: any) => {
      setFormData(formRes)
   }
   return (
      <Container>
         <Card style={{ width: '100%', borderRadius: '4px' }}>
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

export default Food
