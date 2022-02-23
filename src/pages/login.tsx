import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import phone from '../../public/images/login/phone.png'
import home from '../../public/images/login/home.png'

// Components
import Footer from '../components/common/Footer'
import LoginForm from '../components/login/LoginForm'
import MobileSlideShow from '../components/login/MobileSlideShow'

const Login: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    // Change URL
    router.replace('/login', '/', {
      shallow: true,
    })
  }, [])

  return (
    <section className="flex h-screen min-h-screen w-screen flex-col justify-between">
      <main className="h-full">
        <article className="mx-auto flex h-full w-full max-w-7xl">
          <div className="flex h-full w-full justify-center xs:items-center">
            <MobileSlideShow />
            <LoginForm />
          </div>
        </article>
      </main>

      <Footer />
    </section>
  )
}

export default Login
