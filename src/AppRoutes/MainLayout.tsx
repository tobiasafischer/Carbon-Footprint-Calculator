import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useMediaQuery } from '../../../hooks'
import { MobileNavbar, SlidingMenu } from './mobile'
import { Navbar, Sidebar } from './web'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
`

const MainLayout = () => (
   <Container>
      <Outlet />
   </Container>
)

export default MainLayout
