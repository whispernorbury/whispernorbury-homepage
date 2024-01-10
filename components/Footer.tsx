import styled from "styled-components"
import Space from "./Space"
import ContentBox from "@/layouts/ContentBox"

const CopyYear = (): string => {
    let year = new Date().getFullYear()
    if (year == 2024) { return ''; }
    else { return " - " + year;}
}
const Copyright = styled.div`
    height : 8em;
`
const Footer: React.FC = () => {
    return (
        <ContentBox>
        <Space h={'3em'}/>
        <Copyright>
            © 2024{CopyYear()}, Sunwoo Jeong All rights reserved.
        </Copyright>
        </ContentBox>
    )
}

export default Footer