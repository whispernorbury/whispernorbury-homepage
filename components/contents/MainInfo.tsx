import React, { useEffect, useState } from "react"
import ContentBox from "@/components/ContentBox"
import HighSpan from "@/components/HighSpan"
import Space from "@/components/Space"
import BlockHead from "@/components/BlockHead"

const MainInfo: React.FC = () => {
  const [ Width, setWidth ] = useState(0);
  useEffect(() => { setWidth(window.innerWidth); });
  const pstyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '10vh',
  }
  return (
    <ContentBox h={'100vh'}>
      <Space h={Width <= 600 ? '50vh' : '45vh'}></Space>
      <BlockHead>WhisperNorbury</BlockHead>
      <HighSpan>Build Anything</HighSpan>
      <HighSpan>that I need.</HighSpan>
      <p style={pstyle}>
        <b>정선우</b>
        <br/>
        <a href="https://cs.yonsei.ac.kr/"><span>연세대학교 컴퓨터과학과</span></a>
      </p>
    </ContentBox>
  );
}

export default MainInfo;