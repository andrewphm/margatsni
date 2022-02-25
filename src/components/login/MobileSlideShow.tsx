import Image from 'next/image'
import { useState, useEffect } from 'react'

import phone from '../../../public/images/login/phone.png'
import ss from '../../../public/images/login/ss.jpg'
import ss2 from '../../../public/images/login/ss2.jpg'
import ss3 from '../../../public/images/login/ss3.jpg'
import ss4 from '../../../public/images/login/ss4.jpg'
import ss5 from '../../../public/images/login/ss5.jpg'

const MobileSlideShow = () => {
  // Logic for slide show
  useEffect(() => {
    let slide = 1

    document.getElementById(`slide${slide}`)?.classList.remove('opacity-0')

    document
      .getElementById(`slide${slide}`)
      ?.classList.add('animate-[fade_10s_ease-in]', 'z-50')

    document.getElementById(`slide${slide + 1}`)?.classList.remove('opacity-0')

    const intervalID = setInterval(() => {
      document.getElementById(`slide${slide}`)?.classList.add('opacity-0')

      document
        .getElementById(`slide${slide}`)
        ?.classList.remove('animate-[fade_10s_ease-in]', 'z-50')

      if (slide === 4) {
        document.getElementById(`slide1`)?.classList.remove('opacity-0')
        document
          .getElementById(`slide5`)
          ?.classList.add('animate-[fade_10s_ease-in]', 'z-50')
      } else if (slide === 5) {
        document.getElementById(`slide2`)?.classList.remove('opacity-0')
        document
          .getElementById(`slide1`)
          ?.classList.add('animate-[fade_10s_ease-in]', 'z-50')
      } else {
        document
          .getElementById(`slide${slide + 2}`)
          ?.classList.remove('opacity-0')
        document
          .getElementById(`slide${slide + 1}`)
          ?.classList.add('animate-[fade_10s_ease-in]', 'z-50')
      }

      slide += 1
      if (slide === 6) slide = 1
    }, 7000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return (
    <div className={`relative hidden w-[440px] lg1:flex`}>
      <div className="relative w-full">
        <Image draggable={false} src={phone} className="h-auto w-full" />
      </div>

      <div
        id="slide1"
        className="visible absolute left-[146px] top-[97px] z-50 opacity-0"
      >
        <Image
          draggable={false}
          src={ss}
          className="h-auto w-[100px]"
          height="413px"
          width="233px"
        />
      </div>

      <div
        id="slide2"
        className=" visible absolute left-[146px] top-[97px] opacity-0"
      >
        <Image
          draggable={false}
          src={ss2}
          className="h-auto w-[100px]"
          height="413px"
          width="233px"
        />
      </div>

      <div
        id="slide3"
        className="visible absolute left-[146px] top-[97px] opacity-0 duration-[3000ms]"
      >
        <Image
          draggable={false}
          src={ss3}
          className="h-auto w-[100px]"
          height="413px"
          width="233px"
        />
      </div>

      <div
        id="slide4"
        className="visible absolute left-[146px] top-[97px] opacity-0"
      >
        <Image
          draggable={false}
          src={ss4}
          className="h-auto w-[100px]"
          height="413px"
          width="233px"
        />
      </div>

      <div
        id="slide5"
        className=" visible absolute left-[146px] top-[97px] opacity-0"
      >
        <Image
          draggable={false}
          src={ss5}
          className="h-auto w-[100px]"
          height="413px"
          width="233px"
        />
      </div>
    </div>
  )
}

export default MobileSlideShow
