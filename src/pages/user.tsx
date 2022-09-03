import Head from 'next/head'
import User from '../components/pages/User'

const UserPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>User</title>
      </Head>

      <User />
    </>
  )
}

export default UserPage