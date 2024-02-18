import * as yup from 'yup'

export const FormRegisterSchema = yup.object({
  userName: yup.string().trim().required('Vui lòng nhập họ và tên!'),
  email: yup.string().trim().required('Vui lòng nhập Email!'),
  password: yup.string().trim().required('Vui lòng nhập mật khẩu !'),
  confirmPassword: yup
    .string()
    .trim()
    .required('Vui lòng xác nhận mật khẩu !')
    .oneOf([yup.ref('password')], 'Nhập lại mật khẩu không khớp')
})

export type FormRegisterType = yup.InferType<typeof FormRegisterSchema>
