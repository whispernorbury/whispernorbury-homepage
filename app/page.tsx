"use client"

import LinkedProfile from "@/components/contents/LinkedProfile"
import MainInfo from "@/components/contents/MainInfo"
import Navigation from "@/components/Navigation"
import FootPrint from "@/components/FootPrint"
import Footer from "@/components/Footer"
import Space from "@/components/Space"

const Home: React.FC = () => {
  return (
    <>
      <Navigation/>
      <MainInfo/>
      <Space h={'40px'}/>
      <LinkedProfile/>
      <FootPrint/>
      <Footer/>
    </>
  )
}

export default Home