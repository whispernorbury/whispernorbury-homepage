import { ReactNode, useEffect, useState } from "react"
import Space from "./Space"
import ContentBox from "@/components/ContentBox"

interface Props { children: ReactNode; }
const CopyYear = (): string => {
    let year = new Date().getFullYear()
    if (year == 2024) { return ''; }
    else { return " - " + year;}
}
const Copyright: React.FC<Props> = ({children}) => {
    const [ Width, setWidth ] = useState(0);
    useEffect(() => { setWidth(window.innerWidth); });
    const mobile: React.CSSProperties = {
        fontSize: '11px',
    }
    const style: React.CSSProperties = {
        height: '8em',
    }
    if (Width <= 600) { return (<div style={mobile}>{children}</div>);}
    return ( <div style={style}> {children} </div>);
}
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
export default Footer;