import { Fragment, useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from 'src/modules/Share/contexts'
import { FormSignInType } from '../../utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSignInSchema } from '../../utils/rules/sign_in.rules'
import { SignInCommandHandler } from '../../services'
import path from 'src/modules/Share/constants/path'
import SignInForm from '../../components/SignInForm'
import { toast } from 'react-toastify'

const SignIn = () => {
  const { setIsAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSignInType>({
    resolver: yupResolver(FormSignInSchema)
  })

  const signInCommandHandler = new SignInCommandHandler()

  const handleSubmitForm = handleSubmit((data) => {
    signInCommandHandler.handle(
      data,
      () => {
        setIsAuthenticated(true)
        navigate(path.home)
      },
      (error: any) => {
        console.log(error)
        toast.error('Thông tin đăng nhập không chính xác!')
      }
    )
  })

  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='This is login page of the project' />
      </Helmet>
      <div className='grid grid-cols-2 bg-white rounded-3xl lg:w-[1000px] md:w-[700px] max-md:w-[320px] overflow-hidden shadow-[rgba(25,_94,_142,_0.36)_2px_9px_20px]'>
        <div className='flex flex-col gap-6 col-span-1 px-10 lg:pt-10 md:pt-5 max-md:pt-3 bg-[#bdeef4] rounded-e-full items-center justify-center'>
          <div className='flex gap-4 items-center'>
            <div className='rounded-full bg-[#88c444]'>
              <img
                src={'https://static.careerviet.vn/themes/careerbuilder/img/job-alert/i2.png'}
                alt='image_login'
                className='w-[280px] p-6 '
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-[20px] font-bold'>KIẾM VIỆC DỄ DÀNG</span>
              <span className='text-gray-500'>
                Tìm được công việc bạn yêu thích phù hợp với kỹ năng và tiêu chí bạn quan tâm
              </span>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='rounded-full bg-[#fcb616]'>
              <img
                src={'https://static.careerviet.vn/themes/careerbuilder/img/job-alert/i3.png'}
                alt='image_login'
                className='w-[240px] p-6'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-[20px] font-bold'>ỨNG TUYỂN NHANH CHÓNG</span>
              <span className='text-gray-500'>Dễ dàng ứng tuyển nhiều vị trí mà không cần mất nhiều thời gian</span>
            </div>
          </div>
        </div>
        <div className='col-span-1 lg:px-10 lg:py-10 md:px-5 md:py-5 max-md:px-4 max-md:py-4 flex flex-col justify-center'>
          <Link to={path.home} className='text-[44px] font-bold text-[#195E8E] hover:text-[#195E8E]/70 text-center'>
            Job Recommender
          </Link>
          <div className='md:mb-[20px] max-md:mb-[10px] text-center'>
            <h1 className='lg:text-[34px] md:text-[30px] max-md:text-[18px] text-[#195E8E] font-bold mb-[10px]'>
              Đăng nhập
            </h1>
          </div>
          <form onSubmit={handleSubmitForm}>
            <SignInForm register={register} errors={errors} />
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default SignIn
