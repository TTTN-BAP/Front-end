import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'src/modules/Share/components/Button'
import path from 'src/modules/Share/constants/path'
import { AppContext } from 'src/modules/Share/contexts'

const Header = () => {
  const { isAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  return (
    <div className='flex gap-4 items-center justify-between px-8 py-4 sticky top-0 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50'>
      <Link to={path.home} className='flex flex-col items-center'>
        <span className='text-[44px] font-semibold text-[#272b66]'>Job Description</span>
        <span className='text-[18px] text-[#272b66]'>Leading the human resources industry</span>
      </Link>
      <div className='flex gap-8 text-[#4c7292]'>
        <Link to={'#!'} className='p-4 border-b-4 border-transparent hover:border-[#272b66]'>
          Tìm việc làm
        </Link>
        <Link to={'#!'} className='p-4 border-b-4 border-transparent hover:border-[#272b66]'>
          CV hay
        </Link>
        <Link to={'#!'} className='p-4 border-b-4 border-transparent hover:border-[#272b66]'>
          Tiện ích
        </Link>
        <Link to={'#!'} className='p-4 border-b-4 border-transparent hover:border-[#272b66]'>
          Cẩm nang
        </Link>
      </div>
      {isAuthenticated ? (
        <Button
          type='button'
          classNameButton='flex gap-3 px-4 py-2 rounded-3xl bg-slate-100 hover:bg-slate-200'
          onClick={() => {
            navigate(path.profile)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6 text-[#969696]'
          >
            <path
              fillRule='evenodd'
              d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
              clipRule='evenodd'
            />
          </svg>
          <span>Tài khoản</span>
        </Button>
      ) : (
        <div className='flex text-[#5d677a]'>
          <Link to={'#!'} className='px-4 hover:text-[#eecd24]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
              <path
                fillRule='evenodd'
                d='M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
          <Link to={path.login} className='flex px-4 border-l-[1px] border-r-[1px] gap-2 hover:text-[#eecd24]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
              <path
                fillRule='evenodd'
                d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                clipRule='evenodd'
              />
            </svg>
            <span>Đăng nhập</span>
          </Link>
          <Link to={path.register} className='px-4 hover:text-[#eecd24]'>
            Đăng ký
          </Link>
        </div>
      )}
    </div>
  )
}

export default Header
