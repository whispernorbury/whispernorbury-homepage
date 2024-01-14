import styled from "styled-components"
import ContentBox from "@/layouts/ContentBox"
import ThemeContext from "@/contexts/ThemeContext";
import React, { useContext } from "react";

interface Props {
    $isDark : boolean;
}
const Gold = styled.span<Props>`
    color: ${props => props.$isDark ? '#d5b749' : '#987e26'};
`
const FootPrint: React.FC = () => {
    const {theme} = useContext(ThemeContext)!;
    return (
        <ContentBox>
            <div><a href="https://sites.google.com/yonsei.ac.kr/genaicontest">
                <span>연세 제1회 AI활용 경진대회</span></a> <Gold $isDark={theme}>금상</Gold> - TeamDahe</div>
        </ContentBox>
    )
}

export default FootPrint