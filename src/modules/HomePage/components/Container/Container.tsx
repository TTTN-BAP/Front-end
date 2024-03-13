import Pagination from 'src/modules/Share/components/Pagination'
import { GetAllJobsQuery } from '../../services'
import JobItem from '../JobItem'
import useQueryJobConfig from '../../hooks/useQueryJobConfig'
import path from 'src/modules/Share/constants/path'
import FilterJob from '../FilterJob'
import { FormFilterJobSchema, FormFilterJobType } from '../../utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { URLSearchParamsInit, createSearchParams, useNavigate } from 'react-router-dom'
import { isEmpty, omitBy } from 'lodash'

const Container = () => {
  const navigate = useNavigate()

  const queryJobConfig = useQueryJobConfig()

  const getAllJobsQuery = new GetAllJobsQuery()
  const jobs = getAllJobsQuery.fetch()

  const FilterJobForm = useForm<FormFilterJobType>({
    resolver: yupResolver(FormFilterJobSchema)
  })

  const handleSubmitFormFilter = FilterJobForm.handleSubmit((data) => {
    const config = {
      ...queryJobConfig,
      page: 1,
      limit: 10,
      search: data.search,
      job_address: data.job_address,
      job_level: data.job_level,
      job_experience: data.job_experience,
      job_salary: data.job_salary
    }
    navigate({
      pathname: path.home,
      search: createSearchParams(omitBy(config, isEmpty) as URLSearchParamsInit).toString()
    })
  })

  const handleResetFormFilter = () => {
    FilterJobForm.setValue('search', '')
    FilterJobForm.setValue('job_address', '')
    FilterJobForm.setValue('job_experience', '')
    FilterJobForm.setValue('job_level', '')
    FilterJobForm.setValue('job_salary', '')
  }

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmitFormFilter()
          }}
        >
          <FilterJob control={FilterJobForm.control} onResetForm={handleResetFormFilter} />
        </form>
      </div>
      <div className='gap-y-4 mx-12 mt-8 gap-6'>
        {jobs && jobs.map((job) => <JobItem job={job} key={job.id} />)}
        <div className='my-6'>
          <Pagination
            queryConfig={queryJobConfig}
            pageSize={getAllJobsQuery.getTotalPages()}
            pathname={path.home}
            className='flex justify-end'
          />
        </div>
      </div>
    </div>
  )
}

export default Container
