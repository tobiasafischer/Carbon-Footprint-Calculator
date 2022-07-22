import { Layout } from 'antd'
import styled from 'styled-components'

const { Content } = Layout
export const Container = styled.div`
   height: 100%;
   width: 100%;
   .logo {
      height: 32px;
      margin: 16px;
      background: rgba(255, 255, 255, 0.3);
   }
`

export const OutletContainer = styled(Content)`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   background-color: rgb(240, 242, 245);
   h1 {
      font-size: 40px;
   }
`
