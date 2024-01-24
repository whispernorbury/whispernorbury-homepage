import { useState, useEffect, ReactNode } from "react"

interface Props { children?: ReactNode; }
const HighSpan: React.FC<Props> = ({children}) => {
    return ( <h1> {children} </h1> );
}
export default HighSpan;