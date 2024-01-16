import React, {ReactNode} from "react";

interface Props {
    children? : ReactNode;
    w?: number | string;
}

const ContentCell: React.FC<Props> = ({children, w}) => {
    const style:React.CSSProperties = {
        paddingLeft: w,
    }
    return ( <div style={style}> {children} </div>);
}
export default ContentCell;