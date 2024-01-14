import { ReactNode } from "react"

interface Props { children?: ReactNode; }
const HighSpan: React.FC<Props> = ({children}) => {
    const style: React.CSSProperties = {
        fontSize: '60px',
    }
    return ( <h1 style={style}> {children} </h1> );
}
export default HighSpan;