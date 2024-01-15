import ContentBox from "@/components/ContentBox"
import ThemeContext from "@/contexts/ThemeContext";
import React, { ReactNode, useContext } from "react";
import Space from "./Space";

interface GoldProps { $isDark : boolean; children: ReactNode; }
interface LoadProps { loaded : boolean; }

const Gold: React.FC<GoldProps> = ({$isDark, children,}) => {
    const style: React.CSSProperties = {
        color: $isDark? "#d5b749" : "#987e26",
    }
    return ( <span style={style}> {children} </span> );
}
const FootPrint: React.FC<LoadProps> = ({loaded}) => {
    const {theme} = useContext(ThemeContext)!;
    return (
        <ContentBox>
            <Space h={'2em'}/>
            <div><a href="https://sites.google.com/yonsei.ac.kr/genaicontest">
                <span>연세 제1회 AI활용 경진대회</span></a> <Gold $isDark={loaded && theme}>금상</Gold> - TeamDahe</div>
        </ContentBox>
    )
}

export default FootPrint