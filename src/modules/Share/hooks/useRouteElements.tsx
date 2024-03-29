import { Suspense, useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from 'src/modules/Share/constants/path'
import { AppContext } from '../contexts/app.context'
import NotFound from '../components/NotFound'
import AuthenticationLayout from '../layouts/AuthenticationLayout'
import SignIn from 'src/modules/Authentication/pages/SignIn'
import HomePageLayout from '../layouts/HomePageLayout'
import HomePage from 'src/modules/HomePage/pages/HomePage'
import Register from 'src/modules/Authentication/pages/Register'
import DetailPage from 'src/modules/HomePage/pages/DetailPage'
import ProfilePage from 'src/modules/Profile/pages/ProfilePage'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <AuthenticationLayout>
              <Suspense>
                <SignIn />
              </Suspense>
            </AuthenticationLayout>
          )
        },
        {
          path: path.register,
          element: (
            <AuthenticationLayout>
              <Suspense>
                <Register />
              </Suspense>
            </AuthenticationLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.profile,
          element: (
            <HomePageLayout>
              <Suspense>
                <ProfilePage />
              </Suspense>
            </HomePageLayout>
          )
        }
      ]
    },
    {
      path: path.home,
      element: (
        <HomePageLayout>
          <Suspense>
            <HomePage />
          </Suspense>
        </HomePageLayout>
      )
    },
    {
      path: path.profile,
      element: (
        <HomePageLayout>
          <Suspense>
            <ProfilePage />
          </Suspense>
        </HomePageLayout>
      )
    },
    {
      path: path.detail,
      element: (
        <HomePageLayout>
          <Suspense>
            <DetailPage />
          </Suspense>
        </HomePageLayout>
      )
    },
    {
      path: '*',
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
