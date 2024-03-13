/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query'
import jobAPI from './job.api'
import { JobType } from '../interfaces'

class GetJobQuery {
  private _query
  constructor(id: string) {
    this._query = useQuery({
      queryKey: ['job', id],
      queryFn: () => jobAPI.getJobById(id as string),
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data as JobType
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetJobQuery }
