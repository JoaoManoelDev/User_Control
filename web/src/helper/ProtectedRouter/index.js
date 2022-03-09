import { useContext } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

export const ProtectedRouter = (props) => {
  const { isLoggedIn } = useContext(UserContext)

  if (isLoggedIn === true) return <Route { ...props } />
  if (isLoggedIn === false) return <Navigate to="/login" />
  else return null

}
