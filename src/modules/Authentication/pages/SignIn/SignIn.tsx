import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'

const SignIn = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='This is login page of the project' />
      </Helmet>
      <div>Sign In</div>
    </Fragment>
  )
}

export default SignIn
