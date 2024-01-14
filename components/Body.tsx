import ThemeContext from "@/contexts/ThemeContext";
import React, { ReactNode, useContext } from "react";

interface Props {
    children?: ReactNode;
    $isDark? : boolean;
}
const BodyCSS:React.FC<Props> = ({children, $isDark}) => {
    const style: React.CSSProperties = {
        backgroundColor: $isDark ? "#191919" : "#ffffff",
        color: $isDark ? "#acbfff" : "#3e5496",
    }
    return ( <body style={style}> {children} </body>);
}
interface BodyProps { children : ReactNode; loaded: boolean; }
const Body: React.FC<BodyProps> = ({ children, loaded }) => {
    const { theme } = useContext(ThemeContext)!;
    return (
        <BodyCSS $isDark={loaded && theme}>
            { children }
        </BodyCSS>
    );
}
export default Body;