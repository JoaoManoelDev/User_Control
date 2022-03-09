import { createContext, useCallback, useEffect, useState } from "react";
import Axios from '../services/axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const UserContext = createContext()

const toastConfig = {
  duration: 4000,
  position: 'top-right',
  icon: '👋',

  style: {
    background: '#6833e4',
    minWidth: '190px',
    minHeigth: '50px',
    color: '#fff',
  }
}

export const UserStorage = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const userLogout = useCallback(
    async function () {
      setUserData(null)
      setError(null)
      setIsLoading(false)
      setIsLoggedIn(false)
      window.localStorage.removeItem('token')
      navigate('/login')
    }, 
    [navigate]
  )

  async function getUser(token) {
    const response = await Axios.get('token/verify', {
      headers: {
        authorization: 'Bearer ' + token
      }
    })

    if (response.statusText === 'OK') {
      setUserData(response)
      setIsLoggedIn(true)
    } else {
      return false
    }
  }

  const userLogin = async (email, password) => {
    try {
      setIsLoading(true)
      const response = await Axios.post('token', {
        email,
        password
      })

      if (response.status !== 200) throw Error(response.data.Error)

      const { data } = response

      window.localStorage.setItem('token', data.token)

      await getUser(data.token)

      toast(`Olá! - ${data.userData.name}`, toastConfig)
      navigate('/')

    } catch (err) {
      console.log(err)
      setError(err)
      setIsLoggedIn(false)
    } finally {
      setIsLoading(false)
    }
  }
   
  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setIsLoading(true)
          await getUser(token)
        } catch (e) {
          userLogout()
        } finally {
          setIsLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout, navigate])

  return (
    <UserContext.Provider
      value={{ 
        userData,
        isLoggedIn,
        isLoading,
        error,
        userLogin,
        getUser,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  )

}