import React, { useEffect, useState } from "react"
import ContentBox from "@/components/ContentBox"
import HighSpan from "@/components/HighSpan"
import Space from "@/components/Space"
import BlockHead from "@/components/BlockHead"

const MainInfo: React.FC = () => {
  const [ Width, setWidth ] = useState(0);
  useEffect(() => { setWidth(window.innerWidth); }, []);
  const pstyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '10lvh',
  }
  return (
    <ContentBox h={'100lvh'}>
      <Space h={Width <= 720 ? '50lvh' : '45lvh'}></Space>
      <BlockHead>WhisperNorbury</BlockHead>
      <HighSpan>Build &quot;Anything&quot;</HighSpan>
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