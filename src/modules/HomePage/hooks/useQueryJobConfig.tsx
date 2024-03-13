import { isUndefined, omitBy } from 'lodash'
import { JobsListConfig } from '../interfaces'
import { useQueryParams } from 'src/modules/Share/hooks'

export type QueryJobConfig = {
  [key in keyof JobsListConfig]: string
}

const useQueryJobConfig = () => {
  const queryJobParams: JobsListConfig = useQueryParams()
  const queryJobConfig: QueryJobConfig = omitBy(
    {
      search: queryJobParams.search,
      job_level: queryJobParams.job_level,
      job_address: queryJobParams.job_address,
      job_experience: queryJobParams.job_experience,
      job_salary: queryJobParams.job_salary,
      page: queryJobParams.page || 1,
      limit: queryJobParams.limit || 10,
      id: queryJobParams.id
    },
    isUndefined
  )
  return queryJobConfig
}

export default useQueryJobConfig
