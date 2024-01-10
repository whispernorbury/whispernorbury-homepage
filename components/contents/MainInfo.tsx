import ContentBox from "@/layouts/ContentBox"
import HighSpan from "@/layouts/HighSpan"
import Space from "@/components/Space"
import BlockHead from "@/layouts/BlockHead"

const MainInfo: React.FC = () => {
    return (
      <ContentBox>
        <Space h={'15em'}></Space>
        <BlockHead>WhisperNorbury</BlockHead>
        <HighSpan>Builds Everything</HighSpan>
        <HighSpan>If Need</HighSpan>
        <Space h={'5px'}/>
        <p>
          <b>정선우</b>
          <br/>
          <a href="https://cs.yonsei.ac.kr/">연세대학교 컴퓨터과학과</a>
        </p>
      </ContentBox>
    )
}

export default MainInfo