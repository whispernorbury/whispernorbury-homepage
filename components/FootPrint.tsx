import styled from "styled-components"
import ContentBox from "@/layouts/ContentBox"
import ThemeContext from "@/contexts/ThemeContext";
import React, { useContext } from "react";

interface GoldProps {
    $isDark : boolean;
}
interface Props {
    loaded : boolean;
}
const Gold = styled.span<GoldProps>`
    color: ${props => props.$isDark ? '#d5b749' : '#987e26'};
`
const FootPrint: React.FC<Props> = ({loaded}) => {
    const {theme} = useContext(ThemeContext)!;
    return (
        <ContentBox>
            <div><a href="https://sites.google.com/yonsei.ac.kr/genaicontest">
                <span>연세 제1회 AI활용 경진대회</span></a> <Gold $isDark={loaded && theme}>금상</Gold> - TeamDahe</div>
        </ContentBox>
    )
}

export default FootPrint