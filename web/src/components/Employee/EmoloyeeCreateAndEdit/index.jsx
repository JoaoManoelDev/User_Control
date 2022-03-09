import { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import toast from 'react-hot-toast'

import { Error } from '../../../helper/Error'

import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'

import { useRequest } from '../../../hooks/useRequest'

import { Loading } from '../../../helper/Loading'
import { EmployeeForm } from '../../Employee/EmployeeForm'

import { EmployeeDeleteModal } from '../EmployeeDeleteModal'

import Back from '../../../assets/back.svg'

import * as Styled from './styles'

import { Button } from '../../utils/Button/styles'

const initialValuesState = {
  name: "",
  email: "",
  position: "",
  nationality: "Brasileiro",
  photo: null
}

const toastConfig = {
  duration: 5000,
  position: 'top-center',

  style: {
    minWidth: '190px',
    minHeigth: '60px',

  }
}

export const EmoloyeeCreateAndEdit = () => {
  const { userData } = useContext(UserContext)

  const [initialValues, setInitialValues] = useState(initialValuesState)
  const [photo, setPhoto] = useState([])

  const [openModalEmployeeDelete, setOpenModalEmployeeDelete] = useState(false)
  
  const { id } = useParams()
  const { request, isLoading, error } = useRequest()

  const navigate = useNavigate()

  useEffect(() => {
    if (!id) return

    const source = Axios.CancelToken.source()

    async function getEmployee() {
      const { json } = await request({
        url: `employee/${id}`,
        method: 'get',
        headers : {
          authorization: userData.config.headers.authorization
        },
        CancelToken: source.token
      })

      if (json.Photo) {
        setPhoto(json.Photo.url)
      }

      setInitialValues(json)
    }

    getEmployee()

    return () => {
      source.cancel()
    }

  }, [id, request, userData])

  const onSubmit = async (values) => {
    
    if (!values) return

    let photoData = new FormData()
    photoData.append('photo', values.photo)

    const { response, json } = await request({
      url: id ? `employee/${id}` : 'employee' ,
      method: id ? 'put' : 'post',
      data: {
        name: values.name,
        email: values.email,
        position: values.position,
        nationality: values.nationality,
      },
      headers : {
        authorization: userData.config.headers.authorization
      }
    })

    if (response === null) {
      toast.error('Não foi possivel criar funcionártio.', toastConfig)
      navigate('/')
      return
    }

    if (response.status === 201 && values.photo !== null) {
      console.log('Funcionou')
      const idEmployee = json.employeeResult.id

      const response = await request({
        url: `photo/${idEmployee}`,
        method: 'post',
        data: photoData,
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: userData.config.headers.authorization
        },

      })

      console.log('Photo', response)

      if (response == null) toast.error('Erro ao salvar foto!', toastConfig)
      
    }

    setInitialValues(json)
    navigate('/')

  }

  console.log(error?.request.response)

  return (
    <Styled.Container>
      <Loading isLoading={isLoading} />
       
      <header>
        <h1 className="title">{ id ? 'Editar Funcionário' : 'Adicionar Funcionário' }</h1>
        <Link to="/"><img src={Back} alt="voltar"/></Link>
      </header>

      <Styled.FormContents>

        <Styled.EmployeeContents>
          <EmployeeForm 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            />
        </Styled.EmployeeContents>
        <Styled.ProfileContents>
          <h1>Foto Atual</h1>
          {photo.length === 0 
            ? <FaUserCircle size={300}/> 
            : <img src={photo} alt="Foto de perfil" /> 
          }

          { id && <Button  
              onClick={() => setOpenModalEmployeeDelete(true)}
            >
              Deletar Funcionário(a)
            </Button> 
           }

        </Styled.ProfileContents>


      { error 
        && error.response.data.Error === 'Email already exists.' 
        && <Error error={'Email já existe.'} />
      }
      
      </Styled.FormContents>

      { openModalEmployeeDelete && <EmployeeDeleteModal 
          closeModal={setOpenModalEmployeeDelete}
          id={id}
        /> 
      }

    </Styled.Container>
  )
}