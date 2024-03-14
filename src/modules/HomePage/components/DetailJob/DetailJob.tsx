import { formatDate } from 'src/modules/Share/utils'
import { JobType } from '../../interfaces'

interface Props {
  job: JobType
}
const DetailJob = ({ job }: Props) => {
  return (
    job && (
      <div className='m-12 flex flex-col gap-y-4 '>
        <span className='text-[26px] font-semibold'>{job.job_name}</span>
        <span className='uppercase text-gray-500'>{job.company_name}</span>
        <div className='h-[300px] w-[300px]'>
          <img
            src={job.company_logo}
            alt=''
            className='h-full w-full rounded-lg border-[1px] border-gray-300 object-contain'
          />
        </div>
        <div className='flex flex-col gap-y-4'>
          <h2 className='font-semibold text-[20px]'>MÔ TẢ CÔNG VIỆC</h2>
          <ul className='list-disc list-inside'>
            {job.job_details.split('\n').map((item, index) => index !== 0 && <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className='flex flex-col gap-y-4'>
          <h2 className='font-semibold text-[20px]'>YÊU CẦU CÔNG VIỆC</h2>
          <ul className='list-disc list-inside'>
            {job.job_required.split('\n').map((item, index) => index !== 0 && <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className='flex flex-col gap-y-4'>
          <h2 className='font-semibold text-[20px]'>MỨC LƯƠNG</h2>
          <ul className='list-disc list-inside'>
            <li>{job.job_salary}</li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-4'>
          <h2 className='font-semibold text-[20px]'>CẤP BẬC</h2>
          <ul className='list-disc list-inside'>
            <li>{job.job_level}</li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-4'>
          <h2 className='font-semibold text-[20px]'>ĐỊA CHỈ</h2>
          <ul className='list-disc list-inside'>
            <li>{job.job_address}</li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-4'>
          <h2 className='font-semibold text-[20px]'>HẠN NỘP HỒ SƠ</h2>
          <ul className='list-disc list-inside'>
            <li>{formatDate(job.job_expired_date)}</li>
          </ul>
        </div>
      </div>
    )
  )
}

export default DetailJob
