import axios, { type AxiosInstance } from 'axios'
import { getAccessTokenFromLocalStorage, setAccessTokenToLocalStorage } from 'src/modules/Authentication/utils/auth'
import connect from '../constants/connect'
import { AuthResponse } from 'src/modules/Authentication/interfaces'
import HttpStatusCode from '../constants/httpStatusCode'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: connect.baseUrl,
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
          return config
        }
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === '/auth.php' || url === '/register.php') {
          const data = response.data as AuthResponse
          this.accessToken = data.token
          setAccessTokenToLocalStorage(this.accessToken)
        }
        return response
      },
      async (error: any) => {
        if (
          ![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)
        ) {
          const data: any | undefined = error.response?.data
          const message = data?.code || error.code
          console.log(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
