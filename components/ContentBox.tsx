import React, { ReactNode, useEffect, useState } from "react";

interface Props {
    h?: number | string;
    w?: number | string;
    children?: ReactNode;
}
const ContentBox: React.FC<Props> = ({children, h, w}) => {
    const [ Width, setWidth ] = useState(0);
    useEffect(() => { setWidth(window.innerWidth); });
    const mobile:React.CSSProperties = {
        height: h,
        width: w,
        paddingLeft: "20px",
        paddingBottom: "1.3em",
    }
    const style:React.CSSProperties = {
        height: h,
        width: w,
        paddingLeft: "50px",
        paddingBottom: "1.3em",
    }
    if (Width <= 600) { return( <div style={mobile}> { children } </div>); }
    return ( <div style={style}> {children} </div>)
}
export default ContentBox