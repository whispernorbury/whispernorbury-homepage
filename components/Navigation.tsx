"use client"

import styled from 'styled-components'

const NavContainer = styled.div`
    position: fixed;
    height: 5em;
    display: flex;
    right: 40px;
    top: 40px;
`
const Navcell = styled.div`
    text-align: center;
    padding: 5px;
    margin-top: auto;
`

const Navigation : React.FC = () => {
    return (
        <NavContainer>
            <a href='#'>
                <Navcell>TOP</Navcell>
            </a>
            <Navcell>

            </Navcell>
        </NavContainer>
    )
}

export default Navigation