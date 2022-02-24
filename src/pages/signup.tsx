import type { NextPage } from 'next'

import Footer from '../components/common/Footer'
import SignupForm from '../components/signup/SignupForm'
import MobileSlideShow from '../components/login/MobileSlideShow'

const Signup: NextPage = () => {
  return (
    <section className="flex h-screen min-h-screen w-screen flex-col justify-between">
      <main className="h-full">
        <article className="mx-auto flex h-full w-full max-w-7xl">
          <div className="flex h-full w-full justify-center xs:items-center">
            <MobileSlideShow />
            <SignupForm />
          </div>
        </article>
      </main>

      <Footer />
    </section>
  )
}

export default Signup
