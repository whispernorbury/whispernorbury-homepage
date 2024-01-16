import React, { ReactNode } from "react";

interface Props {
    children? : ReactNode;
    fontSize? : number | string;
}
const BlockHead:React.FC<Props> = ({children, fontSize}) => {
    const style: React.CSSProperties = {
        fontSize: fontSize,
    }
    return ( <div style={style}>{children}</div>);
}
export default BlockHead;