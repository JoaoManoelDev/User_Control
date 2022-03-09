import * as Yup from 'yup'

export const validationSchema = Yup.object({
  email: Yup.string().required('Campo obrigatório.').email('Digite um email válido.'),
  password: Yup.string().required('Campo obrigatório.')
})

