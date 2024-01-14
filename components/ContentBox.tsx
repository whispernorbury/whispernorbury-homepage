import React, { ReactNode } from "react";

interface Props {
    h?: number | string;
    w?: number | string;
    children?: ReactNode;
}
const ContentBox: React.FC<Props> = ({children, h, w}) => {
    const style:React.CSSProperties = {
        height: h,
        width: w,
        paddingLeft: "50px",
        paddingBottom: "1.3em",
    }
    return ( <div style={style}> {children} </div>)
}
export default ContentBox