import * as Styled from './styles'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import { EmployeeTableList } from '../../components/Employee/EmployeeTableList'
import { useRequest } from '../../hooks/useRequest'
import { Loading } from '../../helper/Loading'

import { Error } from '../../helper/Error'

export const EmployeesList = () => {
  const { request, isLoading, error } = useRequest()

  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    const source = Axios.CancelToken.source()

    const getEmployee = async () => {
      const { json } = await request({
        url: 'employee',
        method: 'get',
        CancelToken: source.token
      })

      console.log(json)

      setEmployeeList(json)
    }

    getEmployee()

    return () => {
      source.cancel()
    }

  }, [request])

  return (
    <Styled.Container>
      <Styled.Header>
        <h1 className="title">Funcionários</h1>
        <Link to="/employee/create">Registrar funcionário +</Link>
      </Styled.Header>

      <Styled.Section>
        <Error error={error} />
        <Loading isLoading={isLoading} />

        { employeeList.length > 0
          ? <EmployeeTableList employees={employeeList} />
          : <Styled.Span>Não há funcinários.</Styled.Span>
        }
      </Styled.Section>
    </Styled.Container>
  )
}
