/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FormProfileType } from '../utils'
import profileAPI from './profile.api'

class EditProfileCommandHandler {
  private _queryClient
  private _editProfileMutation

  constructor() {
    this._queryClient = useQueryClient()
    this._editProfileMutation = useMutation({
      mutationFn: (body: { data: FormProfileType }) => profileAPI.editProfile(body)
    })
  }

  handle = async (body: { data: FormProfileType }, handleSuccess: any, handleError: any) => {
    return this._editProfileMutation.mutate(body, {
      onSuccess: () => {
        this._queryClient.invalidateQueries({
          queryKey: ['profile']
        })
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }

  isLoading() {
    return this._editProfileMutation.isPending
  }
}

export { EditProfileCommandHandler }
