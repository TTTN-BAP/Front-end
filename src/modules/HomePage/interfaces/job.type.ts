export interface JobType {
  id: number
  job_name: string
  id_company: string
  company_name: string
  job_salary: string
  job_experience: string
  job_level: string
  job_expired_date: string
  job_details: string
  job_required: string
  company_logo: string
  job_address: string
}

export interface JobsListType {
  totalPages: number
  data: JobType[]
}
