import { createSearchParams, useNavigate } from 'react-router-dom'
import { JobType } from '../../interfaces'
import path from 'src/modules/Share/constants/path'
import { formatDate } from 'src/modules/Share/utils'

interface Props {
  job: JobType
}

const JobItem = ({ job }: Props) => {
  const navigate = useNavigate()

  const getDetailJob = (id: number) => {
    navigate({
      pathname: path.detail,
      search: createSearchParams({
        id: id.toString()
      }).toString()
    })
  }

  return (
    <div
      className='flex gap-4 px-4 py-8 border-t-[1px] border-gray-300 cursor-pointer hover:bg-slate-100'
      onClick={() => getDetailJob(job.id)}
    >
      <div className='mix-h-[200px] min-w-[200px]'>
        <img
          src={job.company_logo}
          alt=''
          className='h-full w-full rounded-lg border-[1px] border-gray-300 object-contain'
        />
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <span className='text-[26px] font-semibold'>{job.job_name}</span>
        <span className='uppercase text-gray-500'>{job.company_name}</span>
        <div className='flex '>
          <div className='w-[28px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-[#38b55e]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          </div>
          <div className='flex gap-2'>
            <span>Lương:</span>
            <span>{job.job_salary}</span>
          </div>
        </div>
        <div className='flex'>
          <div className='w-[28px]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' className='w-4 ml-1 fill-[#EC232B]'>
              <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
            </svg>
          </div>
          <span>{job.job_address}</span>
        </div>
        <div className='flex'>
          <div className='w-[28px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-[#0db5df]'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
            </svg>
          </div>
          <div className='flex gap-2'>
            <span>Hạn nộp:</span>
            <span>{formatDate(job.job_expired_date)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobItem
