import React, { useState } from 'react'
import { Card, InputNumber, Form, Button } from 'antd'

import SidePanel from './SidePanel'
import { CardContainer, Container } from './Transportation.styled'

const formItems = [
   {
      name: 'vehicle',
      title: 'How any miles do you drive in a vehicle a year?',
      emoji: '🏎️',
   },
   {
      name: 'bus',
      title: 'How any miles do you drive in a bus a year?',
      emoji: '🚌',
   },
   { name: 'metro', title: 'How any miles do you drive in a metro (subway) a year?', emoji: '🚃' },
   {
      name: 'taxi',
      title: 'How any miles do you drive in a taxi a year?',

      emoji: '🚕',
   },
   {
      name: 'rail',
      title: 'How any miles do you drive in a rail/train a year?',
      emoji: '🚆',
   },
   { name: 'flying', title: 'How any miles do you fly in a year?', emoji: '🛩️' },
]

const Transportation: React.FC = () => {
   const [form] = Form.useForm()
   const [formData, setFormData] = useState(null)

   const onFinish = (formRes: any) => {
      setFormData(formRes)
   }
   return (
      <Container>
         <Card style={{ height: '836px', width: '100%', borderRadius: '4px' }}>
            <h1>Calculate Transportation Carbon Footprint</h1>
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

export default Transportation
