import { useContext, useEffect } from 'react'
import useRouteElements from './modules/Share/hooks/useRouteElements'
import { AppContext } from './modules/Share/contexts'
import { LocalStorageEventTarget } from './modules/Authentication/utils'

const App = () => {
  const RouteElements = useRouteElements()

  const { reset } = useContext(AppContext)

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearToken', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearToken', reset)
    }
  })

  return <div>{RouteElements}</div>
}

export default App
