import { useForm } from 'react-hook-form'
import Profile from '../../components/Profile'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProfileSchema, FormProfileType } from '../../utils'
import { toast } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'
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
import { JobType } from 'src/modules/HomePage/interfaces'
import JobItem from 'src/modules/HomePage/components/JobItem'

function ProfilePage() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext)
  const [jobsRecommender, setJobsRecommender] = useState<JobType[]>()

  const getUserId = new GetUserIdQuery(isAuthenticated)
  const userId = getUserId.fetch()

  const getProfileQuery = new GetProfileQuery(isAuthenticated, userId)
  const profile = getProfileQuery.fetch()

  useEffect(() => {
    if (profile) {
      const body = JSON.stringify({
        cv_target: profile.cv_target,
        cv_academi_level: profile.cv_academi_level,
        cv_skill: profile.cv_skill,
        cv_interest: profile.cv_interest
      })
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      }
      fetch('http://127.0.0.1:5000/content-based-with-cv', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setJobsRecommender(data)
        })
    }
  }, [profile, setJobsRecommender])

  console.log(jobsRecommender && jobsRecommender)

  const navigate = useNavigate()

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
      <div className='mx-12'>
        <h2 className='font-semibold text-[20px]'>ĐỀ XUẤT CÔNG VIỆC PHÙ HỢP VỚI THÔNG TIN CÁ NHÂN</h2>
        <div className='gap-y-4 gap-6 mt-6'>
          {jobsRecommender !== undefined && jobsRecommender.map((job) => <JobItem job={job} key={job.id} />)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage
