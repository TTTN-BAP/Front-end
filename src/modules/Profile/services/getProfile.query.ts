import { useQuery } from '@tanstack/react-query'
import { ProfileType } from '../interfaces'
import profileAPI from './profile.api'

class GetProfileQuery {
  private _query
  constructor(isAuthenticated: boolean, id: string) {
    this._query = useQuery({
      queryKey: ['profile'],
      queryFn: () => profileAPI.getProfile(id),
      enabled: isAuthenticated === true && id !== null && id !== undefined,
      staleTime: 3 * 60 * 1000
    })
  }

  fetch() {
    return this._query.data?.data as ProfileType
  }

  isLoading() {
    return this._query.isLoading
  }
}

export { GetProfileQuery }
