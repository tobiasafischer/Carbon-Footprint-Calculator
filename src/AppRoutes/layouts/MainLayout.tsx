import React from 'react'
import { DashboardFilled, HomeFilled, CarFilled, AppleFilled } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { ROUTES } from '../routes'
import { Container, OutletContainer } from './MainLayout.styled'

const { Content, Sider } = Layout

const icons = {
   dashboard: <DashboardFilled />,
   housing: <HomeFilled />,
   transportation: <CarFilled />,
   food: <AppleFilled />,
}

const MainLayout = () => {
   const items: MenuProps['items'] = Object.keys(ROUTES).map((route) => ({
      label: (
         <Link
            // @ts-ignore
            to={ROUTES[route]}
            style={{ textTransform: 'capitalize', color: '#fff', fontSize: '15px' }}
         >
            {route}
         </Link>
      ),
      key: route,
      // @ts-ignore
      icon: icons[route],
   }))

   return (
      <Container>
         <Layout className="layout" style={{ width: '100%', height: '100%' }}>
            <Sider>
               <div className="logo" />
               <Menu theme="dark" mode="inline" defaultSelectedKeys={['housing']} items={items} />
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
