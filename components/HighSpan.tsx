import { useState, useEffect, ReactNode } from "react"

interface Props { children?: ReactNode; }
const HighSpan: React.FC<Props> = ({children}) => {
    const [ Width, setWidth ] = useState(0);
    useEffect(() => { setWidth(window.innerWidth); });
    const mobile: React.CSSProperties = {
        fontSize: '30px',
        lineHeight: '0.5em',
    }
    const style: React.CSSProperties = {
        fontSize: '60px',
    }
    if (Width <= 600) { return ( <h1 style={mobile}> {children} </h1>); }
    return ( <h1 style={style}> {children} </h1> );
}
export default HighSpan;