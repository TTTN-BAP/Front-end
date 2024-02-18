import http from 'src/modules/Share/utils/http'
import { FormRegisterType, FormSignInType } from '../utils'
import { AuthResponse } from '../interfaces'

const authAPI = {
  signIn: (body: FormSignInType) => http.post<AuthResponse>('/auth/sign-in', body),

  register: (body: FormRegisterType) => http.post('/auth/register', body)
}

export default authAPI
