import ContentBox from "@/layouts/ContentBox"
import styled from "styled-components"
import Image from "next/image"
import GithubIcoWhite from "@/public/icons/Github-white.svg"
import InstagramIcoWhite from "@/public/icons/Instagram-white.svg"
import TwitterIcoWhite from "@/public/icons/Twitter-white.svg"
import GithubIcoBlack from "@/public/icons/Github-black.svg"
import InstagramIcoWine from "@/public/icons/Instagram-wine.svg"
import TwitterIcoSky from "@/public/icons/Twitter-sky.svg"
import BlockHead from "@/layouts/BlockHead"
import Space from "../Space"

const ContentCell = styled.div`
    padding-left: 30px;
`

interface Props {
    darkmode : boolean;
}

const LinkedProfile : React.FC<Props> = ({darkmode}) => {
    const List = [
        {
            id: 0,
            title: "Github",
            link: "https://github.com/whispernorbury",
            ico: darkmode ? GithubIcoWhite : GithubIcoBlack,
        },
        {
            id: 1,
            title: "Instagram",
            link: "https://instagram.com/whispernorbury",
            ico: darkmode ? InstagramIcoWhite : InstagramIcoWine,
        },
        {
            id: 2,
            title: "Twitter",
            link: "https://twitter.com/whispernbry",
            ico: darkmode ? TwitterIcoWhite : TwitterIcoSky,
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