"use client"

import LinkedProfile from "@/components/contents/LinkedProfile"
import MainInfo from "@/components/contents/MainInfo"
import Navigation from "@/components/Navigation"
import FootPrint from "@/components/contents/FootPrint"
import Footer from "@/components/Footer"
import Space from "@/components/Space"
import Body from "@/components/Body"
import ThemeProvider from "@/contexts/ThemeProvider"
import { useState, useEffect } from "react"
import TechStacks from "@/components/contents/TechStacks"

const Home: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, [setLoaded]);
  return (
    <ThemeProvider>
      <Body loaded={loaded}>
        <Navigation loaded={loaded}/>
        <MainInfo/>
        <LinkedProfile loaded={loaded}/>
        <TechStacks/>
        <FootPrint loaded={loaded}/>
        <Footer/>
      </Body>
    </ThemeProvider>
  )
}

export default Home