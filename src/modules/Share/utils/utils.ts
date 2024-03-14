import axios, { AxiosError } from 'axios'
import HttpStatusCode from '../constants/httpStatusCode'
import moment from 'moment-timezone'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnauthorizedError(error: unknown): error is AxiosError {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized
}

export function formatDate(dateTime: string) {
  return moment(dateTime).format('DD/MM/YYYY')
}
