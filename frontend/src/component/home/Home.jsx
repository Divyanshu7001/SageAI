import React, { useEffect, useRef } from 'react'
import Banner from './Banner'
import Features from './Features'
import Features2 from './Features2'
import Testimonials from '../home/Testimonials'
import FAQSection from './FAQSection'
import Vesion from './Vesion'

export default function Home() {
  const home = useRef()
  useEffect(()=>{
    Array.from(home.current.childNodes).forEach((element,index) => {
      if (index%2!==0) {
        element.classList.add('bg-altcoreBg')
      }
    });
  },[])
  return (
    <main ref={home}>
      <Banner/>
      <Features/>
      <Vesion/>
      <Testimonials/>
      <FAQSection/>

    </main>
  )
}
