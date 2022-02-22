import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Login: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    // Change URL
    router.replace('/login', '/', {
      shallow: true,
    })
  }, [])

  return <div>login</div>
}

export default Login
