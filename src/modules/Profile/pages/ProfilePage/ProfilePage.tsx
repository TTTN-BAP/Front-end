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

function ProfilePage() {
  const { isAuthenticated } = useContext(AppContext)

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

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmitForm}>
        <Profile
          control={control}
          profile={profile}
          setValue={setValue}
          isLoading={editProfileCommandHandler.isLoading()}
        />
      </form>
      <Footer />
    </div>
  )
}

export default ProfilePage
