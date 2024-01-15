import { ReactNode } from "react"
import Space from "./Space"
import ContentBox from "@/components/ContentBox"

interface Props { children: ReactNode; }
const CopyYear = (): string => {
    let year = new Date().getFullYear()
    if (year == 2024) { return ''; }
    else { return " - " + year;}
}
const Copyright: React.FC<Props> = ({children}) => {
    const style: React.CSSProperties = {
        position: 'absolute',
        right: '10px',
        fontSize: '0.6em',
    }
    return ( <div style={style}> {children} </div>);
}
const Footer: React.FC = () => {
    return (
        <>
        <Space h={'3em'}/>
        <Copyright>
            © 2024{CopyYear()}, Sunwoo Jeong All rights reserved.
        </Copyright>
        </>
    )
}
export default Footer;