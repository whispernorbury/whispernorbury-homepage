import Image from 'next/image'
import Moon from '@/public/icons/Moon-white.svg'
import Sun from '@/public/icons/Sun-black.svg'
import ThemeContext from '@/contexts/ThemeContext'
import React, { useState, useEffect, useContext, ReactNode } from 'react'

interface Props {
    children?: ReactNode;
    onclick? : () => void;
}
const NavContainer: React.FC<Props> = ({children}) => {
    const [ Width, setWidth ] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])
    const style:React.CSSProperties = {
        position: "fixed",
        right: "80px",
        top: "50px",
        height: "4em",
        display: "flex",
    }
    const mobile:React.CSSProperties = {
        position: "fixed",
        right: "20px",
        top: "20px",
        display: "flex",
        height: "2em",
    }
    if (Width <= 720) {return <div style={mobile}>{children}</div>}
    return ( <div style={style}> {children} </div> );
}
const NavCell: React.FC<Props> = ({children, onclick}) => {
    const style:React.CSSProperties = {
        cursor: "pointer",
        textDecoration: "none",
    }
    return ( <div onClick={onclick} style={style}> {children} </div>);
}
interface LoadProps { loaded : boolean; }
const Navigation : React.FC<LoadProps> = ({loaded}) => {
    const { theme, setTheme } = useContext(ThemeContext)!;
    const handleTheme = () => {
        setTheme(!theme);
        localStorage.setItem('theme', (String)(!theme));
    }
    const SMoon: React.CSSProperties = {

    }
    const SSun: React.CSSProperties = {

    }
    return (
        <NavContainer>
            <NavCell onclick={handleTheme}>
                <Image
                    src={loaded && theme ? Moon : Sun }
                    height={30} width={30}
                    alt='ChangeTheme' priority={true}/>
            </NavCell>
            <NavCell>
            </NavCell>
        </NavContainer>
    )
}

export default Navigation;