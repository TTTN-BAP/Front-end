import { useForm } from 'react-hook-form'
import Profile from '../../components/Profile'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProfileSchema, FormProfileType } from '../../utils'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AppContext } from 'src/modules/Share/contexts'
import { GetUserIdQuery } from 'src/modules/Authentication/services'
import { GetProfileQuery } from '../../services/getProfile.query'
import Header from 'src/modules/HomePage/components/Header'
import Footer from 'src/modules/HomePage/components/Footer'
import { EditProfileCommandHandler } from '../../services/updateProfile.command-handler'
import Button from 'src/modules/Share/components/Button'
import path from 'src/modules/Share/constants/path'
import { clearTokenFromLocalStorage } from 'src/modules/Authentication/utils'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext)

  const navigate = useNavigate()

  const getUserId = new GetUserIdQuery(isAuthenticated)
  const userId = getUserId.fetch()

  const getProfileQuery = new GetProfileQuery(isAuthenticated, userId)
  const profile = getProfileQuery.fetch()

  const { handleSubmit, control, setValue } = useForm<FormProfileType>({
    resolver: yupResolver(FormProfileSchema)
  })

  const editProfileCommandHandler = new EditProfileCommandHandler()

  const handleSubmitForm = handleSubmit(async (data) => {
    editProfileCommandHandler.handle(
      { id: userId, data: data },
      () => {
        toast.success('Cập nhật thông tin thành công !')
      },
      (error: any) => {
        console.log(error)
      }
    )
  })

  const handleLogOut = () => {
    setIsAuthenticated(false)
    clearTokenFromLocalStorage()
    navigate(path.home)
  }

  return (
    <div>
      <Header />
      <div className='grid grid-cols-3 gap-8 m-12'>
        <div className='col-span-1 border-[1px] rounded-xl border-[#ccc] h-[400px]'>
          <img
            src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'
            alt=''
            className='w-full p-4'
          />
          <div className='flex justify-around gap-6 text-[18px] mt-4'>
            <Button
              type='button'
              classNameButton='px-4 py-3 rounded-3xl bg-slate-200 hover:bg-slate-300 text-[#182642]'
              onClick={() => {
                navigate(path.home)
              }}
            >
              Trang chủ
            </Button>
            <Button
              type='button'
              classNameButton='px-4 py-3 rounded-3xl bg-slate-200 hover:bg-slate-300 text-[#182642]'
              onClick={handleLogOut}
            >
              Đăng xuất
            </Button>
          </div>
        </div>
        <form onSubmit={handleSubmitForm} className='col-span-2'>
          <Profile
            control={control}
            profile={profile}
            setValue={setValue}
            isLoading={editProfileCommandHandler.isLoading()}
          />
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage
