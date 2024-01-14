import styled from "styled-components"
import ThemeContext from "@/contexts/ThemeContext";
import React, { ReactNode, useContext } from "react";

interface Props {
    $isDark : boolean;
}
const BodyCSS = styled.body<Props>`
    background-color: ${props => props.$isDark ? '#191919' : '#ffffff'};
    color: ${props => props.$isDark ? '#acbfff' : '#3e5496'};
    ::selection {
        background-color : ${props => props.$isDark ? '#464952' : '#afbfd5'};
    }
    a span:hover {
        color: ${props => props.$isDark ? '#c2bf7e' : '#3e9657'};
        text-decoration-color: ${props => props.$isDark ? '#8bde8e' : '#3e9657'};
        transition: color 0.2s ease;
    }
`
interface BodyProps {
    children : ReactNode;
}
const Body: React.FC<BodyProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext)!;
    return (
        <BodyCSS $isDark={theme}>
            { children }
        </BodyCSS>
    );
}
export default Body