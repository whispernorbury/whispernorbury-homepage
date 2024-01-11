import ContentBox from "@/layouts/ContentBox"
import styled from "styled-components"
import Image from "next/image"
import GithubIco from "@/public/icons/Github-white.svg"
import InstagramIco from "@/public/icons/Instagram-white.svg"
import TwitterIco from "@/public/icons/Twitter-white.svg"
import BlockHead from "@/layouts/BlockHead"
import Space from "../Space"

const ContentCell = styled.div`
    padding-left: 30px;
`

const List = [
    {
        id: 0,
        title: "Github",
        link: "https://github.com/whispernorbury",
        ico: GithubIco
    },
    {
        id: 1,
        title: "Instagram",
        link: "https://instagram.com/whispernorbury",
        ico: InstagramIco
    },
    {
        id: 2,
        title: "Github",
        link: "https://github.com/whispernorbury",
        ico: TwitterIco
    },
]
const LinkedProfile = () => {
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