import styled from 'styled-components'
import Image from 'next/image'
import Moon from '@/public/icons/Moon-white.svg'
import Sun from '@/public/icons/Sun-black.svg'

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
    darkmode : boolean;
    toggleDark : (value : boolean) => void;
}
const Navigation : React.FC<Props> = (props) => {
    return (
        <NavContainer>
            <NavCell onClick={() => props.toggleDark(!props.darkmode)}>
                {props.darkmode
                    ? <Image src={Moon} height={30} width={30} alt='Moon'/>
                    : <Image src={Sun} height={30} width={30} alt='Sun'/>
                }
            </NavCell>
            <NavCell>
            </NavCell>
        </NavContainer>
    )
}

export default Navigation