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
import React, {ReactNode, useContext, useEffect, useState,} from "react"
import ContentCell from "@/components/ContentCell"

interface LoadProps { loaded : boolean; }
const LinkedProfile : React.FC<LoadProps> = ({loaded}) => {
    const [Width, setWidth] = useState(0);
    useEffect(() => { setWidth(window.innerWidth); }, []);
    const { theme } = useContext(ThemeContext)!;
    const List = [
        {
            title: "Github",
            link: "https://github.com/whispernorbury",
            ico: (loaded && theme) ? GithubIcoWhite : GithubIcoBlack,
        },
        {
            title: "Instagram",
            link: "https://instagram.com/whispernorbury",
            ico: (loaded && theme) ? InstagramIcoWhite : InstagramIcoWine,
        },
        {
            title: "Twitter",
            link: "https://twitter.com/whispernbry",
            ico: (loaded && theme) ? TwitterIcoWhite : TwitterIcoSky,
        },
    ]
    return (
        <ContentBox h={'30vh'}>
            <BlockHead fontSize={'1.7em'}>ABOUT</BlockHead>
            <Space h={'1.7em'}/>
            {List.map(ele => (
                <ContentCell w={'1em'} key={ele.title}>
                    <a href={ele.link}>
                        <Image src={ele.ico} alt={ele.title} width={Width <= 600 ? 15 : 20} height={Width <= 600 ? 15 : 20}/>
                        <b> </b>
                        <span>{ele.title}</span>
                    </a>
                </ContentCell>
            ))}
        </ContentBox>
    )
}
export default LinkedProfile