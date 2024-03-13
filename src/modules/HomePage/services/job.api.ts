import http from 'src/modules/Share/utils/http'
import { JobType, JobsListType } from '../interfaces/job.type'
import { JobsListConfig } from '../interfaces'

const jobAPI = {
  getListJobs: (params: JobsListConfig) => http.get<JobsListType>('/get_all_job_filter.php', { params }),

  getJobById: (id: string) => http.get<JobType>('/get_job_by_id.php', { params: { id: id } })
}

export default jobAPI
