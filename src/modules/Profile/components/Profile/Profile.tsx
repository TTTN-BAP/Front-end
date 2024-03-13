import { TextField } from '@mui/material'
import { Fragment, useEffect } from 'react'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import { ProfileType } from '../../interfaces'
import { FormProfileType } from '../../utils'
import Button from 'src/modules/Share/components/Button'

interface Props {
  control: Control<FormProfileType>
  setValue: UseFormSetValue<FormProfileType>
  profile: ProfileType
  isLoading: boolean
}

const Profile = ({ control, profile, setValue, isLoading }: Props) => {
  useEffect(() => {
    if (profile) {
      setValue('cv_name', profile.cv_name)
      setValue('cv_email', profile.cv_email)
      setValue('cv_birthday', profile.cv_birthday)
      setValue('cv_sdt', profile.cv_sdt)
      setValue('cv_target', profile.cv_target)
      setValue('cv_work_experience', profile.cv_work_experience)
      setValue('cv_skill', profile.cv_skill)
      setValue('cv_academi_level', profile.cv_academi_level)
      setValue('cv_interest', profile.cv_interest)
    }
  }, [profile, setValue])

  const handleReset = () => {
    if (profile) {
      setValue('cv_name', profile.cv_name)
      setValue('cv_email', profile.cv_email)
      setValue('cv_birthday', profile.cv_birthday)
      setValue('cv_sdt', profile.cv_sdt)
      setValue('cv_target', profile.cv_target)
      setValue('cv_work_experience', profile.cv_work_experience)
      setValue('cv_skill', profile.cv_skill)
      setValue('cv_academi_level', profile.cv_academi_level)
      setValue('cv_interest', profile.cv_interest)
    }
  }
  return (
    <Fragment>
      <div className='grid grid-cols-3 lg:gap-x-6 lg:gap-y-4 md:gap-x-4 md:gap-y-3 max-md:gap-x-2 max-md:gap-y-2 m-12'>
        <Controller
          name='cv_name'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_name } }) => (
            <div className='w-full'>
              <TextField
                id='code'
                label='Họ và tên'
                value={value}
                placeholder='Nhập Họ và tên'
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
            </div>
          )}
        />
        <Controller
          name='cv_email'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_email }, fieldState: { error } }) => (
            <div>
              <TextField
                id='email'
                label='Email'
                value={value}
                placeholder='Nhập Email'
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />

        <Controller
          name='cv_birthday'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_birthday } }) => (
            <div>
              <TextField
                id='birth'
                label='Ngày sinh'
                value={value}
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
            </div>
          )}
        />
        <Controller
          name='cv_sdt'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_sdt }, fieldState: { error } }) => (
            <div>
              <TextField
                id='phone'
                label='Số điện thoại'
                value={value}
                placeholder='Nhập số điện thoại'
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
        <Controller
          name='cv_academi_level'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_academi_level } }) => (
            <div>
              <TextField
                id='cv_academi_level'
                label='Cấp bậc'
                value={value}
                placeholder='Nhập cấp bậc'
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
            </div>
          )}
        />
        <Controller
          name='cv_skill'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_skill } }) => (
            <div>
              <TextField
                id='cv_skill'
                label='Kĩ năng bản thân'
                placeholder='Nhập kĩ năng bản thân'
                value={value}
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
            </div>
          )}
        />
        <Controller
          name='cv_work_experience'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_work_experience }, fieldState: { error } }) => (
            <div>
              <TextField
                id='cv_work_experience'
                label='Kinh nghiệm bản thân'
                value={value}
                placeholder='Nhập kinh nghiệm bản thân'
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
        <Controller
          name='cv_target'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_target }, fieldState: { error } }) => (
            <div>
              <TextField
                id='cv_target'
                label='Định hướng'
                value={value}
                placeholder='Nhập định hướng'
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
        <Controller
          name='cv_interest'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_interest } }) => (
            <div>
              <TextField
                id='cv_interest'
                label='Sơ thích bản thân'
                value={value}
                placeholder='Nhập sở thích bản thân'
                className='w-full bg-white'
                sx={{
                  '& .MuiInputBase-root': {
                    '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                      sm: {
                        padding: '10px 14px',
                        height: '28px',
                        fontSize: '14px'
                      },
                      xs: {
                        padding: '8px 10px',
                        height: '20px',
                        fontSize: '10px'
                      }
                    }
                  }
                }}
                onChange={onChange}
              />
            </div>
          )}
        />
        <div className='flex md:justify-end max-md:justify-center gap-6 py-5 col-span-3'>
          <Button
            onClick={handleReset}
            type='button'
            classNameButton='bg-[#9a9a9a] py-2 md:px-4 max-md:px-2 rounded-lg md:text-[16px] max-md:text-[12px] text-white font-semibold w-[100px]'
          >
            Làm mới
          </Button>
          <Button
            isLoading={isLoading}
            type='submit'
            classNameButton='bg-[#26C6DA] py-2 md:px-4 max-md:px-2 rounded-lg md:text-[16px] max-md:text-[12px] text-white font-semibold w-[90px]'
          >
            Lưu
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile
