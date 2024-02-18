import { Fragment, useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'
import RegisterForm from '../../components/RegisterForm'
import { AppContext } from 'src/modules/Share/contexts'
import { useForm } from 'react-hook-form'
import { FormRegisterSchema, FormRegisterType } from '../../utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterCommandHandler } from '../../services'

const Register = () => {
  const { setIsAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormRegisterType>({
    resolver: yupResolver(FormRegisterSchema)
  })

  const registerCommandHandler = new RegisterCommandHandler()

  const handleSubmitForm = handleSubmit((data) => {
    registerCommandHandler.handle(
      data,
      () => {
        setIsAuthenticated(true)
        navigate(path.profile)
      },
      (error: any) => {}
    )
  })

  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='This is login page of the project' />
      </Helmet>
      <div className='grid grid-cols-2 bg-white rounded-3xl lg:w-[1000px] md:w-[700px] max-md:w-[320px] overflow-hidden shadow-[rgba(25,_94,_142,_0.36)_2px_9px_20px]'>
        <div className='col-span-1 px-10 lg:pt-10 md:pt-5 max-md:pt-3 bg-[#bdeef4] rounded-e-full flex items-center justify-center'>
          <img src={'./'} alt='image_login' className='md:w-[300px] max-md:w-[150px]' />
        </div>
        <div className='col-span-1 lg:px-10 lg:py-10 md:px-5 md:py-5 max-md:px-4 max-md:py-4 flex flex-col justify-center'>
          <Link to={path.home} className='flex justify-center mb-4'>
            <img
              src={'./'}
              alt='logo'
              className='lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] max-md:w-[40px] max-md:h-[40px]'
            />
          </Link>
          <div className='md:mb-[20px] max-md:mb-[10px] text-center'>
            <h1 className='lg:text-[40px] md:text-[30px] max-md:text-[18px] text-[#195E8E] font-bold mb-[10px]'>
              Đăng nhập
            </h1>
            <h2 className='text-[#195E8E] lg:text-[16px] max-md:text-[12px]'>Hệ thống quản lý hoạt động cộng đồng.</h2>
          </div>
          <form onSubmit={handleSubmitForm}>
            <RegisterForm register={register} errors={errors} />
          </form>
          <div className='lg:py-4 md:py-2 max-md:pt-1 text-[15px] flex justify-center items-center max-md:flex-col'>
            <span className='md:text-[12px] max-md:text-[8px] mr-2'>Muốn hợp tác với chúng tôi ?</span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Register
