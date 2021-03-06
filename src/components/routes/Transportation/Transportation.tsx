import React, { useState } from 'react'
import { Card, InputNumber, Form, Button } from 'antd'

import { SidePanel } from './components'
import { CardContainer, Container } from './Transportation.styled'

const formItems = [
   {
      name: 'vehicle',
      title: 'How any miles do you drive in a vehicle a year?',
      emoji: 'đī¸',
   },
   {
      name: 'bus',
      title: 'How any miles do you drive in a bus a year?',
      emoji: 'đ',
   },
   { name: 'metro', title: 'How any miles do you drive in a metro (subway) a year?', emoji: 'đ' },
   {
      name: 'taxi',
      title: 'How any miles do you drive in a taxi a year?',

      emoji: 'đ',
   },
   {
      name: 'rail',
      title: 'How any miles do you drive in a rail/train a year?',
      emoji: 'đ',
   },
   { name: 'flying', title: 'How any miles do you fly in a year?', emoji: 'đŠī¸' },
]

const Transportation: React.FC = () => {
   const [form] = Form.useForm()
   const [formData, setFormData] = useState({})

   const onFinish = (formRes: any) => {
      console.log(formRes)
      setFormData(formRes)
   }

   return (
      <Container>
         <Card style={{ height: '836px', width: '100%', borderRadius: '4px' }}>
            <h1>Calculate Transportation Carbon Footprint</h1>
            <CardContainer>
               <Form form={form} onFinish={onFinish}>
                  {formItems.map(({ name, title, emoji }) => (
                     <React.Fragment key={title}>
                        <p>{`${emoji} ${title}`}</p>
                        <Form.Item initialValue={0} name={name}>
                           <InputNumber />
                        </Form.Item>
                     </React.Fragment>
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
