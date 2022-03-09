import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from './ValidationLoginForm'
import { TextError } from '../../../helper/TextError'
import { UserContext } from '../../../contexts/UserContext'
import { useContext } from 'react'
import { Button } from '../../utils/Button'
import { Error } from '../../../helper/Error'

import { FormControl, Container } from './styles'

const initialValues = {
  email: '',
  password: ''
}

export const LoginForm = () => {

  const { userLogin, isLoading, error } = useContext(UserContext)

  console.log(error?.request.response)

  const onSubmit = values => {
    userLogin(values.email, values.password)
  }

  return (
    <Container>
      <h1 className="title animeLeft">Login</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >

        <Form>
          <FormControl className="animeLeft">
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" placeholder="Exemple@gmail.com" />
            <ErrorMessage name="email" component={TextError} />
          </FormControl>

          <FormControl className="animeLeft">
            <label htmlFor="password">Senha</label>
            <Field type="password" id="password" name="password" placeholder="Senha" />
            <ErrorMessage name="password" component={TextError} />
          </FormControl>

          { isLoading ? (
            <Button disabled type="submit">Entrando...</Button>
          ) : (
            <Button type="submit">Entrar</Button>
          )}

        { error && <Error error={"Email ou senha incorretos."} /> }

        </Form>

      </Formik>

    </Container>
  )
}
