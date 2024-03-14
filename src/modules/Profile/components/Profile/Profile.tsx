import { TextField } from '@mui/material'
import { Fragment, useEffect } from 'react'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import { ProfileType } from '../../interfaces'
import { FormProfileType } from '../../utils'
import Button from 'src/modules/Share/components/Button'
import { formatDate } from 'src/modules/Share/utils'

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
      <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
        <Controller
          name='cv_name'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_name }, fieldState: { error } }) => (
            <div className='col-span-1'>
              <TextField
                id='code'
                label='Họ và tên'
                value={value}
                placeholder='Nhập Họ và tên'
                className='w-full bg-white'
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
        <Controller
          name='cv_email'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_email }, fieldState: { error } }) => (
            <div className='col-span-1'>
              <TextField
                id='email'
                label='Email'
                value={value}
                placeholder='Nhập Email'
                className='w-full bg-white'
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
          render={({
            field: { onChange, value = profile && formatDate(profile.cv_birthday) },
            fieldState: { error }
          }) => (
            <div className='col-span-1'>
              <TextField
                id='birth'
                label='Ngày sinh'
                placeholder='Nhập ngày sinh'
                value={value}
                className='w-full bg-white'
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
        <Controller
          name='cv_sdt'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_sdt }, fieldState: { error } }) => (
            <div className='col-span-1'>
              <TextField
                id='phone'
                label='Số điện thoại'
                value={value}
                placeholder='Nhập số điện thoại'
                className='w-full bg-white'
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
          render={({ field: { onChange, value = profile && profile.cv_academi_level }, fieldState: { error } }) => (
            <div className='col-span-1'>
              <TextField
                id='cv_academi_level'
                label='Cấp bậc'
                value={value}
                placeholder='Nhập cấp bậc'
                className='w-full bg-white'
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
        <Controller
          name='cv_work_experience'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_work_experience }, fieldState: { error } }) => (
            <div className='col-span-1'>
              <TextField
                id='cv_work_experience'
                label='Kinh nghiệm bản thân'
                value={value}
                placeholder='Nhập kinh nghiệm bản thân'
                className='w-full bg-white'
                onChange={onChange}
              />
              <span className='block min-h-[16px] text-red-600 text-xs mt-1 font-medium'>{error?.message}</span>
            </div>
          )}
        />
        <Controller
          name='cv_skill'
          control={control}
          defaultValue=''
          render={({ field: { onChange, value = profile && profile.cv_skill }, fieldState: { error } }) => (
            <div className='col-span-1'>
              <TextField
                id='cv_skill'
                label='Kĩ năng bản thân'
                placeholder='Nhập kĩ năng bản thân'
                value={value}
                className='w-full bg-white'
                onChange={onChange}
                multiline
                rows={3}
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
            <div className='col-span-1'>
              <TextField
                id='cv_target'
                label='Định hướng'
                value={value}
                placeholder='Nhập định hướng'
                className='w-full bg-white'
                onChange={onChange}
                multiline
                rows={3}
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
            <div className='col-span-1'>
              <TextField
                id='cv_interest'
                label='Sơ thích bản thân'
                value={value}
                placeholder='Nhập sở thích bản thân'
                className='w-full bg-white'
                onChange={onChange}
                multiline
                rows={3}
              />
            </div>
          )}
        />
        <div className='flex md:justify-end max-md:justify-center gap-6 py-6 col-span-1'>
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
            classNameButton='bg-[#182642] py-2 md:px-4 max-md:px-2 rounded-lg md:text-[16px] max-md:text-[12px] text-white font-semibold w-[90px]'
          >
            Lưu
          </Button>
        </div>
      </div>
    </Fragment>
  )
}

export default Profile
