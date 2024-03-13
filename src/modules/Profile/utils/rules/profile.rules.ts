import * as yup from 'yup'

export const FormProfileSchema = yup.object({
  cv_name: yup.string().trim().required('Vui lòng nhập tên !').min(5, 'Tên tối thiểu 5 kí tự !'),
  cv_email: yup.string().trim().required('Vui lòng nhập Email !').email('Email không hợp lệ !'),
  cv_birthday: yup
    .string()
    .required('Vui lòng chọn ngày sinh !')
    .test('is_before_today', 'Ngày sinh phải bé hơn ngày hiện tại !', function (value) {
      if (!value) {
        return true
      }
      const birth = new Date(value)
      const today = new Date()
      return birth < today
    }),
  cv_sdt: yup
    .string()
    .trim()
    .required('Vui lòng nhập số điện thoại !')
    .length(10, 'Số điện thoại không hợp lệ !')
    .matches(/^0[0-9]{9}$/, 'Số điện thoại không hợp lệ !'),
  cv_target: yup.string().trim().required('Vui lòng nhập định hướng !'),
  cv_academi_level: yup.string().trim().required('Vui lòng nhập cấp bậc !'),
  cv_work_experience: yup.string().trim().required('Vui lòng nhập kinh nghiệm bản thân !'),
  cv_skill: yup.string().required('Vui lòng nhập kĩ năng bản thân !'),
  cv_interest: yup.string().required('Vui lòng nhập sở thích bản thân !')
})

export type FormProfileType = yup.InferType<typeof FormProfileSchema>
