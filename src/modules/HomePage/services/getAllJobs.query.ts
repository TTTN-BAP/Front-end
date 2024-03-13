/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import jobAPI from './job.api'
import { JobType, JobsListConfig } from '../interfaces'
import useQueryJobConfig from '../hooks/useQueryJobConfig'

class GetAllJobsQuery {
  private _query
  private _queryJobConfig
  constructor() {
    this._queryJobConfig = useQueryJobConfig()
    this._query = useQuery({
      queryKey: ['jobs', this._queryJobConfig],
      queryFn: () => jobAPI.getListJobs(this._queryJobConfig as JobsListConfig),
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data.data as JobType[]
  }

  getTotalPages() {
    return this._query.data?.data.totalPages as number
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetAllJobsQuery }
