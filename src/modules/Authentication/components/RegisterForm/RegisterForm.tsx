import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Button from 'src/modules/Share/components/Button'
import Input from 'src/modules/Share/components/Input'
import path from 'src/modules/Share/constants/path'
import { FormRegisterType } from '../../utils'

interface Props {
  register: UseFormRegister<FormRegisterType>
  errors: FieldErrors<FormRegisterType>
}

const RegisterForm = ({ register, errors }: Props) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true)

  return (
    <div className='flex flex-col lg:gap-2 md:gap-1'>
      <Input
        register={register}
        id='username'
        name='username'
        placeholder='Nhập Tên đăng nhập'
        className='flex flex-col relative'
        classNameInput='border-[2px] border-[#26C6DA] rounded-md lg:py-2 md:pl-10 max-md:pl-4 pr-4 outline-none lg:h-[48px] md:h-[36px] max-md:h-[24px] lg:text-[16px] md:text-[12px] max-md:text-[8px]'
        error={errors.username?.message}
      >
        <div className='absolute lg:left-[4px] lg:top-[8px] md:top-[4px] md:left-[5px] max-md:top-[2.5px] max-md:left-[-4px] cursor-pointer px-2 py-1 text-[#26C6DA]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
            />
          </svg>
        </div>
      </Input>
      <Input
        register={register}
        id='email'
        name='email'
        placeholder='Nhập Email'
        className='flex flex-col relative'
        classNameInput='border-[2px] border-[#26C6DA] rounded-md lg:py-2 md:pl-10 max-md:pl-4 pr-4 outline-none lg:h-[48px] md:h-[36px] max-md:h-[24px] lg:text-[16px] md:text-[12px] max-md:text-[8px]'
        error={errors.email?.message}
      >
        <div className='absolute lg:left-[4px] lg:top-[8px] md:top-[4px] md:left-[5px] max-md:top-[2.5px] max-md:left-[-4px] cursor-pointer px-2 py-1 text-[#26C6DA]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
            />
          </svg>
        </div>
      </Input>
      <Input
        register={register}
        id='password'
        name='password'
        placeholder='Nhập mật khẩu'
        autoComplete='on'
        type={isHiddenPassword ? 'password' : 'text'}
        className='flex flex-col relative'
        classNameInput='border-[2px] border-[#26C6DA] rounded-md lg:py-2 md:pl-10 max-md:pl-4 pr-4 outline-none lg:h-[48px] md:h-[36px] max-md:h-[24px] lg:text-[16px] md:text-[12px] max-md:text-[8px]'
        error={errors.password?.message}
      >
        <div className='absolute lg:left-[4px] lg:top-[8px] md:top-[4px] md:left-[5px] max-md:top-[2.5px] max-md:left-[-4px] cursor-pointer px-2 py-1 text-[#26C6DA]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
            />
          </svg>
        </div>
        {isHiddenPassword ? (
          <Button
            type='button'
            classNameButton='absolute lg:right-[4px] lg:top-[8px] md:right-[2px] md:top-[4px] max-md:right-[1px] max-md:top-[2.5px] cursor-pointer px-2 py-1 text-[#26C6DA]'
            onClick={() => setIsHiddenPassword(!isHiddenPassword)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
              />
            </svg>
          </Button>
        ) : (
          <Button
            type='button'
            classNameButton='absolute lg:right-[4px] lg:top-[8px] md:right-[2px] md:top-[4px] max-md:right-[1px] max-md:top-[2.5px] cursor-pointer px-2 py-1 text-[#26C6DA]'
            onClick={() => setIsHiddenPassword(!isHiddenPassword)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
              />
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
          </Button>
        )}
      </Input>
      <Input
        register={register}
        id='confirmPassword'
        name='confirmPassword'
        placeholder='Xác nhận mật khẩu'
        autoComplete='on'
        type={isHiddenPassword ? 'password' : 'text'}
        className='flex flex-col relative'
        classNameInput='border-[2px] border-[#26C6DA] rounded-md lg:py-2 md:pl-10 max-md:pl-4 pr-4 outline-none lg:h-[48px] md:h-[36px] max-md:h-[24px] lg:text-[16px] md:text-[12px] max-md:text-[8px]'
        error={errors.confirmPassword?.message}
      >
        <div className='absolute lg:left-[4px] lg:top-[8px] md:top-[4px] md:left-[5px] max-md:top-[2.5px] max-md:left-[-4px] cursor-pointer px-2 py-1 text-[#26C6DA]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
            />
          </svg>
        </div>
        {isHiddenPassword ? (
          <Button
            type='button'
            classNameButton='absolute lg:right-[4px] lg:top-[8px] md:right-[2px] md:top-[4px] max-md:right-[1px] max-md:top-[2.5px] cursor-pointer px-2 py-1 text-[#26C6DA]'
            onClick={() => setIsHiddenPassword(!isHiddenPassword)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
              />
            </svg>
          </Button>
        ) : (
          <Button
            type='button'
            classNameButton='absolute lg:right-[4px] lg:top-[8px] md:right-[2px] md:top-[4px] max-md:right-[1px] max-md:top-[2.5px] cursor-pointer px-2 py-1 text-[#26C6DA]'
            onClick={() => setIsHiddenPassword(!isHiddenPassword)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='lg:w-6 lg:h-6 md:w-5 md:h-5 max-md:w-3 max-md:h-3'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
              />
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
          </Button>
        )}
      </Input>
      <div className='flex justify-between'>
        <Link
          to={path.home}
          className='lg:text-[16px] md:text-[12px] max-md:text-[8px] text-right text-[#195E8E] font-semibold md:mb-4 max-md:mb-2 hover:text-[#195E8E]/60 hover:underline'
        >
          Trang chủ
        </Link>
        <Link
          to={path.login}
          className='lg:text-[16px] md:text-[12px] max-md:text-[8px] text-right text-[#195E8E] font-semibold md:mb-4 max-md:mb-2 hover:text-[#195E8E]/60 hover:underline'
        >
          Đăng nhập
        </Link>
      </div>
      <Button
        type='submit'
        classNameButton='w-full bg-[#195E8E] hover:bg-[#195E8E]/80 p-2 max-md:p-1 rounded-xl lg:text-[18px] md:text-[14px] max-md:text-[10px] text-white font-semibold'
      >
        Đăng kí
      </Button>
    </div>
  )
}

export default RegisterForm
