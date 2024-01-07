"use client"

import styled from "styled-components"

const Copyright = styled.div`
    height : 8em;
`
const Footer: React.FC = () => {
    return (
        <Copyright>
            © 2024 - {new Date().getFullYear()}, Sunwoo Jeong All rights reserved.
        </Copyright>
    )
}

export default Footer