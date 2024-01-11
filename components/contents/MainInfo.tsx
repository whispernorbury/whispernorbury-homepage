import React, { useState, useEffect } from "react"
import ContentBox from "@/layouts/ContentBox"
import HighSpan from "@/layouts/HighSpan"
import Space from "@/components/Space"
import BlockHead from "@/layouts/BlockHead"

const MainInfo: React.FC = () => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const setH = () => { setHeight(window.innerHeight); }
    setH();
    window.addEventListener('resize', setH);
    return () => {window.removeEventListener('resize', setH);}
  });
  return (
    <ContentBox>
      <Space h={(height - 275) / 1.5}></Space>
      <BlockHead>WhisperNorbury</BlockHead>
      <HighSpan>Build Anything</HighSpan>
      <HighSpan>that I need.</HighSpan>
      <Space h={(height - 275) / 12}/>
      <p>
        <b>정선우</b>
        <br/>
        <a href="https://cs.yonsei.ac.kr/"><span>연세대학교 컴퓨터과학과</span></a>
      </p>
      <Space h={(height - 275) / 4}/>
    </ContentBox>
  )
}

export default MainInfo