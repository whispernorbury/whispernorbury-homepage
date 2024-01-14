import styled from 'styled-components'
import Image from 'next/image'
import Moon from '@/public/icons/Moon-white.svg'
import Sun from '@/public/icons/Sun-black.svg'
import { useContext, useState, useEffect } from 'react'
import ThemeContext from '@/contexts/ThemeContext'

const NavContainer = styled.div`
    position: fixed;
    right: 80px;
    top: 50px;
    height: 4em;
    display: flex;
`
const NavCell = styled.div`
    cursor: pointer;
    a { text-decoration: none; }
`
interface Props {
    loaded : boolean;
}
const Navigation : React.FC<Props> = ({loaded}) => {
    const { theme, setTheme } = useContext(ThemeContext)!;
    return (
        <NavContainer>
            <NavCell onClick={() => { setTheme(!theme); localStorage.setItem('theme', (String)(!theme))}}>
                <Image src={(loaded && theme) ? Moon : Sun } height={30} width={30} alt='ChangeTheme' priority={true}/>
            </NavCell>
            <NavCell>
            </NavCell>
        </NavContainer>
    )
}

export default Navigation