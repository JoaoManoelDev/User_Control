import { useContext, useState } from 'react'
import { UserContext } from '../../../contexts/UserContext'

import { useNavigate } from 'react-router-dom'

import { useRequest } from '../../../hooks/useRequest'

import { Button } from '../../utils/Button'
import toast from 'react-hot-toast'

import * as Styled from './styles'

const toastConfig = {
  duration: 5000,
  position: 'top-center',

  style: {
    minWidth: '190px',
    minHeigth: '60px',

  }
}

export const EmployeeDeleteModal = ({ closeModal, id }) => {
  const [deleting, setDeleting] = useState(false)

  const { userData } = useContext(UserContext)
  
  const { request } = useRequest()
  const navigate = useNavigate()

  const deleteEmployee = async () => {
    setDeleting(true)

    const { response } = await request({
      url: `employee/${id}`,
      method: 'delete',
      headers : {
        authorization: userData.config.headers.authorization
      }
    })

    if (response == null) {
      toast.error('Erro ao deletar funcionário.', toastConfig)
      navigate('/')
      return
    }

    if (response.status === 200) {
      toast.success('Funcionário deletado com sucesso!', toastConfig)
      navigate('/')
    } 
  }


  return (
    <Styled.Container>
      <Styled.Contents>

        <Styled.Header>
          <h1>Deletar funconário(a)?</h1> 
        </Styled.Header>

        <Styled.Footer>
          { deleting ? (
            <>
              <Button disabled onClick={() => closeModal(false)}>Cancelar</Button>
              <Button disabled onClick={deleteEmployee}>Deletando...</Button>
            </>
          ) : (
            <>
              <Button onClick={() => closeModal(false)}>Cancelar</Button>
              <Button onClick={deleteEmployee}>Deletar</Button>
            </>
          ) }
          
        </Styled.Footer>

      </Styled.Contents>
    </Styled.Container>
  )
}