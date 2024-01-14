import React, { ReactNode } from "react";

interface Props { children? : ReactNode; }
const BlockHead:React.FC<Props> = ({children}) => {
    const style: React.CSSProperties = { }
    return (
        <div style={style}>{children}</div>
    )
}
export default BlockHead;