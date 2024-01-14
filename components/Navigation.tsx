import styled from 'styled-components'
import Image from 'next/image'
import Moon from '@/public/icons/Moon-white.svg'
import Sun from '@/public/icons/Sun-black.svg'
import { useContext } from 'react'
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
const Navigation : React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext)!;
    return (
        <NavContainer>
            <NavCell onClick={() => setTheme(!theme)}>
                { theme
                    ? <Image src={Moon} height={30} width={30} alt='Moon' priority={true}/>
                    : <Image src={Sun} height={30} width={30} alt='Sun'/>
                }
            </NavCell>
            <NavCell>
            </NavCell>
        </NavContainer>
    )
}

export default Navigation