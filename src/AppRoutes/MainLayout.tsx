// @ts-nocheck

import React, { useState } from 'react'
import { DashboardFilled, HomeFilled, CarFilled, AppleFilled } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { Link, Outlet, useOutletContext } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from './routes'

const { Content, Sider } = Layout

const icons = {
   dashboard: <DashboardFilled />,
   housing: <HomeFilled />,
   transportation: <CarFilled />,
   food: <AppleFilled />,
}

const Container = styled.div`
   height: 100%;
   width: 100%;
   .logo {
      height: 32px;
      margin: 16px;
      background: rgba(255, 255, 255, 0.3);
   }
`

const OutletContainer = styled(Content)`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   background-color: rgb(240, 242, 245);
   h1 {
      font-size: 40px;
   }
`

const MainLayout = () => {
   const items: MenuProps['items'] = Object.keys(ROUTES).map((route) => ({
      label: (
         <Link
            to={ROUTES[route]}
            style={{ textTransform: 'capitalize', color: '#fff', fontSize: '15px' }}
         >
            {route}
         </Link>
      ),
      key: route,
      icon: icons[route],
   }))

   return (
      <Container>
         <Layout className="layout" style={{ width: '100%', height: '100%' }}>
            <Sider>
               <div className="logo" />
               <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} items={items} />
            </Sider>
            <Content style={{ padding: '75px 150px', backgroundColor: '#f0f2f5' }}>
               <OutletContainer>
                  <Outlet />
               </OutletContainer>
            </Content>
         </Layout>
      </Container>
   )
}

export default MainLayout
