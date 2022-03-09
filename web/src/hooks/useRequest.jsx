import { useCallback, useState } from 'react'
import axios from '../services/axios'

export const useRequest = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const request = useCallback(async config => {
    let response
    let json

    try {
      setIsLoading(true)
      setError(null)
      response = await axios(config)
      json = response.data
      console.log(response)
      console.log(json)
    } catch (error) {
      json = null
      console.log(error.request.Error)
      setError(error)
    } finally {
      setData(json)
      setIsLoading(false)
      return { response, json }
    }
  }, [])

  return {
    data,
    isLoading,
    error,
    request
  }
}

