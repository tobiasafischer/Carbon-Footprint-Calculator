import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { AppRoutes } from './AppRoutes'
import GlobalStyle from './global'

const Container = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   width: 100vw;
   height: 100vh;
   padding: 50px;
   @media (max-width: 768px) {
      padding: 40px;
   }
`
const App = () => (
   <Container>
      <Router>
         <AppRoutes />
      </Router>
      <GlobalStyle />
   </Container>
)

export default App
