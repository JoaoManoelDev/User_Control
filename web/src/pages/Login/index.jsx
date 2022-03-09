import * as Styled from './styles'
import userAvatar from '../../assets/userAvatar.svg'

import { LoginForm } from '../../components/Login/LoginForm'

import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

import { Navigate } from 'react-router-dom'
 
export const Login = () => {
  const { isLoggedIn } = useContext(UserContext)

  if (isLoggedIn === true) return <Navigate to='/' />

  return (
    <Styled.Section>
      <Styled.Form>
        <img src={userAvatar} alt="Avatar" />
        <LoginForm />
      </Styled.Form>
    </Styled.Section>
  )
}
