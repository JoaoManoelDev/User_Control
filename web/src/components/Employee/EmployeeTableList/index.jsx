import * as Styled from './styles'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const EmployeeTableList = ({ employees }) => {
  console.log(employees)

  return (
    <Styled.Container>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Nacionalidade</th>
            <th>Cargo</th>
            <th></th>
          </tr>
        </thead>

        {employees?.map(employee => (
          <tbody key={employee.id}>
            <tr>
              <td>
                { employee.Photo ? (
                  <img src={employee.Photo.url} alt=""/>
                ) : (
                  <FaUserCircle size={42} />           
                )}
              </td>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.nationality}</td>
              <td>{employee.position}</td>
              <td>
                <Link to={`/employee/edit/${employee.id}`}>Editar</Link>
              </td>
            </tr>
          </tbody>
        ))}

      </table>
    </Styled.Container>
  )
}