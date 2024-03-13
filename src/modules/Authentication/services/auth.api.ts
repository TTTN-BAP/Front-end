import http from 'src/modules/Share/utils/http'
import { FormRegisterType, FormSignInType } from '../utils'
import { AuthResponse } from '../interfaces'

const authAPI = {
  signIn: (body: FormSignInType) => http.post<AuthResponse>('/auth.php', body),

  register: (body: FormRegisterType) => http.post('/register.php', body),

  getUserId: (token: string) => http.get('/get_user_id_from_token.php', { params: { token: token } })
}

export default authAPI
