import { Autocomplete, TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import { FormFilterJobType } from '../../utils'
import { job_address, job_level } from '../../constants'
import Button from 'src/modules/Share/components/Button'

interface Props {
  control: Control<FormFilterJobType>
  onResetForm: () => void
}

const FilterJob = ({ control, onResetForm }: Props) => {
  return (
    <div className='grid grid-cols-3 gap-4 bg-slate-200 py-6 px-12'>
      <div className='col-span-1'>
        <Controller
          name='search'
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <TextField
                id='search'
                label='Tìm kiếm công việc'
                placeholder='Nhập tên công việc'
                className='w-full bg-white'
                value={value}
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
      </div>
      <div className='col-span-1'>
        <Controller
          name='job_address'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              disablePortal
              id='job_address'
              options={job_address}
              value={job_address.find((option) => option.name === value) || null}
              getOptionLabel={(option) => option.name}
              noOptionsText='Không có lựa chọn'
              renderInput={(params) => <TextField {...params} label='Chọn địa điểm' />}
              onChange={(_, option) => onChange(option ? option.name : '')}
              className='w-full bg-white'
            />
          )}
        />
      </div>
      <div className='col-span-1'>
        <Controller
          name='job_level'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              disablePortal
              id='job_level'
              options={job_level}
              value={job_level.find((option) => option.name === value) || null}
              getOptionLabel={(option) => option.name}
              noOptionsText='Không có lựa chọn'
              renderInput={(params) => <TextField {...params} label='Chọn cấp bậc' />}
              onChange={(_, option) => onChange(option ? option.name : '')}
              className='w-full bg-white'
            />
          )}
        />
      </div>
      <div className='col-span-1'>
        <Controller
          name='job_experience'
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <TextField
                id='job_experience'
                label='Yêu cầu công việc'
                placeholder='Nhập yêu cầu công việc'
                className='w-full bg-white'
                value={value}
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
      </div>
      <div className='col-span-1'>
        <Controller
          name='job_salary'
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <TextField
                id='job_salary'
                label='Mức lương'
                placeholder='Nhập mức lương'
                className='w-full bg-white'
                value={value}
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
      </div>
      <div className='flex items-start justify-end gap-4 '>
        <Button
          type='button'
          classNameButton='bg-[#26C6DA] py-4 px-6 rounded-lg text-[16px] text-white font-semibold hover:bg-[#26C6DA]/70'
          onClick={onResetForm}
        >
          Làm mới
        </Button>
        <Button
          type='submit'
          classNameButton='bg-[#d3d3d3] py-4 px-6 rounded-lg text-[14px] text-white font-semibold hover:bg-[#c2c2c2]'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default FilterJob
