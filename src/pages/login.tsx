import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import phone from '../../public/images/login/phone.png'
import home from '../../public/images/login/home.png'

const Login: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    // Change URL
    router.replace('/login', '/', {
      shallow: true,
    })
  }, [])

  return (
    <section>
      <main>
        <article>
          {/* PhoneSlideShow */}
          {/* Login Form */}
        </article>
      </main>

      {/* Footer */}
    </section>
  )
}

export default Login
