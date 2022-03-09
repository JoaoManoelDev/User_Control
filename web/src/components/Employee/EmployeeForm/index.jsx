import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from './validationsEmployeeForm'

import { TextError } from '../../../helper/TextError'

import * as Styled from './styles'
import { Button } from '../../utils/Button/styles'

export const EmployeeForm = ({ initialValues, onSubmit }) => {
  return (

  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    enableReinitialize={true}
  >
    {(formProps) => (

    <Form>
      <Styled.Container>
    
        <Styled.FormControl>
          <label htmlFor="name">Nome</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </Styled.FormControl>

        <Styled.FormControl>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </Styled.FormControl>

        <Styled.FormControl>
          <label htmlFor="position">Cargo</label>
          <Field type="text" id="position" name="position"/>
          <ErrorMessage name="position" component={TextError} />
        </Styled.FormControl>

        <Styled.FormControl>
          <label htmlFor="nationality">Nacionalidade</label>
          <Field as="select" id="nationality" name="nationality">
            <option value="Brasileiro">BRASIL</option>
            <option value="Americano">EUA</option>
            <option value="Português">PORTUGAL</option>
            <option value="Argentino">ARGENTINA</option>

         </Field>
         <ErrorMessage name="nationality" component={TextError} />
        </Styled.FormControl>

        <Styled.FormControl>
          <label htmlFor="photo">Foto</label>
          <input 
            type="file" 
            id="photo" 
            name="photo" 
            onChange={event => formProps.setFieldValue('photo', event.target.files[0])}/>
        </Styled.FormControl> 

        <Button type="submit">Enviar</Button>
        
      </Styled.Container>
    </Form>
    
    )}
  </Formik>

  )
}
