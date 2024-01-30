/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from '@tanstack/react-query'
import authAPI from './auth.api'
import { FormSignInType } from '../utils'

class SignInCommandHandler {
  private _signInMutation

  constructor() {
    this._signInMutation = useMutation({
      mutationFn: (body: FormSignInType) => authAPI.signIn(body)
    })
  }

  handle = (data: FormSignInType, handleSuccess: any, handleError: any) => {
    return this._signInMutation.mutate(data, {
      onSuccess: () => {
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }
}

export { SignInCommandHandler }
