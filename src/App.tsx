import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import GlobalStyle from './global'
import 'antd/dist/antd.css'

const App = () => {
   const client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache(),
   })
   return (
      <div style={{ height: '100vh' }}>
         <ApolloProvider client={client}>
            <Router>
               <AppRoutes />
               <GlobalStyle />
            </Router>
         </ApolloProvider>
      </div>
   )
}

export default App
