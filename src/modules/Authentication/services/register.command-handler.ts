/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from '@tanstack/react-query'
import authAPI from './auth.api'
import { FormRegisterType } from '../utils'

class RegisterCommandHandler {
  private _registerMutation

  constructor() {
    this._registerMutation = useMutation({
      mutationFn: (body: FormRegisterType) => authAPI.register(body)
    })
  }

  handle = (data: FormRegisterType, handleSuccess: any, handleError: any) => {
    return this._registerMutation.mutate(data, {
      onSuccess: () => {
        handleSuccess()
      },
      onError: (error: any) => {
        handleError(error)
      }
    })
  }
}

export { RegisterCommandHandler }
