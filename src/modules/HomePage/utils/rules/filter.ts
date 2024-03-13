import * as yup from 'yup'

export const FormFilterJobSchema = yup.object({
  search: yup.string(),
  job_address: yup.string(),
  job_level: yup.string(),
  job_experience: yup.string(),
  job_salary: yup.string().trim()
})

export type FormFilterJobType = yup.InferType<typeof FormFilterJobSchema>
