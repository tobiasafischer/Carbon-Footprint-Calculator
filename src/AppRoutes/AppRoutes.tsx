import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Housing, Transportation, Food } from '../components/routes'
import { MainLayout } from './layouts'
import { ROUTES } from './routes'

const AppRoutes: React.FC = () => (
   <Routes>
      <Route element={<MainLayout />}>
         <Route path={ROUTES.housing} element={<Housing />} />
         <Route path={ROUTES.transportation} element={<Transportation />} />
         <Route path={ROUTES.food} element={<Food />} />
         <Route path="*" element={<Housing />} />
      </Route>
   </Routes>
)

export default AppRoutes
