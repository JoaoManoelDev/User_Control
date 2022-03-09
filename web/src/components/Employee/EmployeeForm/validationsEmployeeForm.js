import * as Yup from 'yup'

export const validationSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório.'),
  email: Yup.string().required('Campo obrigatório.').email('Digite um email válido.'),
  position: Yup.string().required('Campo obrigatório.'),
  nationality: Yup.string().required('Campo obrigatório.')
})

