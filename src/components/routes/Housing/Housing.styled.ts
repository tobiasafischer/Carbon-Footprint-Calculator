import { Layout } from 'antd'
import styled from 'styled-components'

export const { Content } = Layout

export const CardContainer = styled(Content)`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   width: 100%;
   height: 100%;
   .ant-input-number {
      width: 100%;
      margin-top: 5px;
   }
   button {
      position: absolute;
      bottom: 24px;
   }
`

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   gap: 20px;
   width: 100%;
   height: 100%;
   h1 {
      margin-bottom: 20px;
   }
`
