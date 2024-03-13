import http from 'src/modules/Share/utils/http'
import { FormProfileType } from '../utils'
import { ProfileType } from '../interfaces'

const profileAPI = {
  getProfile: (id: string) => http.get<ProfileType>('/get_cv_by_id.php', { params: { id_cv: id } }),

  editProfile: (body: { id: string; data: FormProfileType }) =>
    http.put(`update_cv_by_id.php?id_cv=${body.id}`, body.data)
}

export default profileAPI
