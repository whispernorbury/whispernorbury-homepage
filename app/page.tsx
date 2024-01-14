"use client"

import LinkedProfile from "@/components/contents/LinkedProfile"
import MainInfo from "@/components/contents/MainInfo"
import Navigation from "@/components/Navigation"
import FootPrint from "@/components/FootPrint"
import Footer from "@/components/Footer"
import Space from "@/components/Space"
import Body from "@/layouts/Body"
import { useState } from "react"

const Home: React.FC = () => {
  const [ isDark, changeDark ] = useState<boolean>(true);
  return (
    <Body $darkmode={isDark}>
      <Navigation darkmode={isDark} toggleDark={changeDark}/>
      <MainInfo/>
      <Space h={'40px'}/>
      <LinkedProfile darkmode={isDark}/>
      <FootPrint/>
      <Footer/>
    </Body>
  )
}

export default Home