"use client"

import LinkedProfile from "@/components/contents/LinkedProfile"
import MainInfo from "@/components/contents/MainInfo"
import Navigation from "@/components/Navigation"
import FootPrint from "@/components/FootPrint"
import Footer from "@/components/Footer"
import Space from "@/components/Space"
import Body from "@/components/Body"
import ThemeProvider from "@/contexts/ThemeProvider"
import { useContext, useEffect, useState } from "react"
import ThemeContext from "@/contexts/ThemeContext"

const Home: React.FC = () => {
  return (
    <ThemeProvider>
      <Body>
        <Navigation/>
        <MainInfo/>
        <Space h={'40px'}/>
        <LinkedProfile/>
        <FootPrint/>
        <Footer/>
      </Body>
    </ThemeProvider>
  )
}

export default Home