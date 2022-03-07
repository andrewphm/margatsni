import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
// Components
import Footer from '../common/Footer'
import Header from '../common/Header'

const Layout = ({ children }): ReactElement => {
  const router = useRouter()

  return (
    <main className="relative flex flex-col justify-between">
      <Header currentTab={router.pathname} />
      <section className="w-full">{children}</section>
      <Footer />
    </main>
  )
}

export default Layout
