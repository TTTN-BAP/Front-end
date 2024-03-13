import { useQuery } from '@tanstack/react-query'
import authAPI from './auth.api'
import { getAccessTokenFromLocalStorage } from '../utils'

class GetUserIdQuery {
  private _query
  private _token
  constructor(isAuthenticated: boolean) {
    this._token = getAccessTokenFromLocalStorage()
    this._query = useQuery({
      queryKey: ['user_id'],
      queryFn: () => authAPI.getUserId(this._token),
      enabled: isAuthenticated
    })
  }

  fetch() {
    return this._query.data?.data.id as string
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetUserIdQuery }
