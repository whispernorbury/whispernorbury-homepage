import styled from "styled-components"
import ContentBox from "@/layouts/ContentBox"

const Gold = styled.span`
    color: rgb(164, 134, 25);
    @media (prefers-color-scheme: dark) {
        color: #b7a668;
    }
`
const FootPrint: React.FC = () => {
    return (
        <ContentBox>
            <div><a href="https://sites.google.com/yonsei.ac.kr/genaicontest">연세 제1회 AI활용 경진대회</a> <Gold>금상</Gold> - TeamDahe</div>
        </ContentBox>
    )
}

export default FootPrint