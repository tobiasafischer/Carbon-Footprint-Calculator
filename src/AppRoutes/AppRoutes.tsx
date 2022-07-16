import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Board, ChoosePlayer, Welcome } from '../components/routes'
import MainLayout from './MainLayout'
import { ROUTES } from './routes'

const AppRoutes: React.FC = () => (
   <Routes>
      <Route element={<MainLayout />}>
         <Route path={ROUTES.housing} element={<Housing />} />
         <Route path={ROUTES.transportation} element={<Transportation />} />
         <Route path={ROUTES.food} element={<Food />} />
         <Route path={ROUTES.waste} element={<Waste />} />
         <Route path="*" element={<Dashboard />} />
      </Route>
   </Routes>
)

export default AppRoutes
