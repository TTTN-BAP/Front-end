import * as yup from 'yup'

export const FormSignInSchema = yup.object({
  email: yup.string().trim().required('Vui lòng nhập Email !'),
  password: yup.string().trim().required('Vui lòng nhập mật khẩu !')
})

export type FormSignInType = yup.InferType<typeof FormSignInSchema>
