import ContentBox from "@/components/ContentBox"
import Image from "next/image"
import GithubIcoWhite from "@/public/icons/Github-white.svg"
import InstagramIcoWhite from "@/public/icons/Instagram-white.svg"
import TwitterIcoWhite from "@/public/icons/Twitter-white.svg"
import GithubIcoBlack from "@/public/icons/Github-black.svg"
import InstagramIcoWine from "@/public/icons/Instagram-wine.svg"
import TwitterIcoSky from "@/public/icons/Twitter-sky.svg"
import BlockHead from "@/components/BlockHead"
import Space from "../Space"
import ThemeContext from "@/contexts/ThemeContext"
import React, {ReactNode, useContext,} from "react"

interface Props { children? : ReactNode; }
const ContentCell: React.FC<Props> = ({children}) => {
    const style:React.CSSProperties = {
        paddingLeft: "30px",
    }
    return ( <div style={style}> {children} </div>);
}
interface LoadProps { loaded : boolean; }
const LinkedProfile : React.FC<LoadProps> = ({loaded}) => {
    const { theme } = useContext(ThemeContext)!;
    const List = [
        {
            id: 0,
            title: "Github",
            link: "https://github.com/whispernorbury",
            ico: (loaded && theme) ? GithubIcoWhite : GithubIcoBlack,
        },
        {
            id: 1,
            title: "Instagram",
            link: "https://instagram.com/whispernorbury",
            ico: (loaded && theme) ? InstagramIcoWhite : InstagramIcoWine,
        },
        {
            id: 2,
            title: "Twitter",
            link: "https://twitter.com/whispernbry",
            ico: (loaded && theme) ? TwitterIcoWhite : TwitterIcoSky,
        },
    ]
    return (
        <ContentBox>
            <BlockHead>About</BlockHead>
            <Space h={'1em'}/>
            {List.map(ele => (
                <ContentCell key={ele.id}>
                    <a href={ele.link}>
                        <Image src={ele.ico} alt={ele.title} width={25} height={25}/>
                        <span>{ele.title}</span>
                    </a>
                </ContentCell>
            ))}
        </ContentBox>
    )
}
export default LinkedProfile