import http from 'src/modules/Share/utils/http'
import { FormSignInType } from '../utils'
import { AuthResponse } from '../interfaces'

const authAPI = {
  signIn: (body: FormSignInType) => http.post<AuthResponse>('/auth/sign-in', body)
}

export default authAPI
