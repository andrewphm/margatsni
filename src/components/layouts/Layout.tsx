import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
// Components
import Footer from '../common/Footer'
import Header from '../common/Header'

const Layout = ({ children }): ReactElement => {
  const router = useRouter()

  console.log(router.pathname)

  return (
    <>
      <Header currentTab={router.pathname} />
      <main className="h-full">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
