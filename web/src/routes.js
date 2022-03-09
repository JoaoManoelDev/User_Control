import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'

import { Login } from './pages/Login'
import { EmployeesList } from './pages/EmployeesList'
import { EmoloyeeCreateAndEdit } from './components/Employee/EmoloyeeCreateAndEdit'

import { NotFound } from './helper/NotFound/index'

import { ProtectedRouter } from './helper/ProtectedRouter'

export const AppRoutes = () => {
  
  return (
    <Layout>
      <Routes>

        <Route path="/login" element={<Login />} />

        <ProtectedRouter path="/" element={<EmployeesList />} /> 

        <ProtectedRouter path="/employee/create" element={<EmoloyeeCreateAndEdit />} />
        <ProtectedRouter path="/employee/edit/:id" element={<EmoloyeeCreateAndEdit />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
