import ContentBox from "@/layouts/ContentBox"
import styled from "styled-components"
import Image from "next/image"
import GithubDark from "@/public/icons/Github_white.svg"
import InstaDark from "@/public/icons/Instagram_white.svg"
import TwitterDark from "@/public/icons/Twitter_white.svg"
import GithubLight from "@/public/icons/Github_dark.svg"
import InstaLight from "@/public/icons/Instagram_dark.svg"
import TwitterLight from "@/public/icons/Twitter_dark.svg"
import BlockHead from "@/layouts/BlockHead"
import Space from "../Space"

const ContentCell = styled.div`
    padding-left: 30px;
`
const LinkedProfile = () => {
    return (
        <ContentBox>
            <BlockHead>About</BlockHead>
            <Space h={'1em'}/>
            <ContentCell>
                <a href="https://github.com/whispernorbury">
                        <Image src={GithubDark} alt="GithubImg" width={25} height={25}/>
                    GITHUB
                </a>
            </ContentCell>
            <ContentCell>
                <a href="https://www.instagram.com/whispernorbury/">
                    <Image src={InstaDark} alt="InstaImg" width={25} height={25}/>
                    INSTAGRAM
                </a>
            </ContentCell>
            <ContentCell>
                <a href="https://twitter.com/whispernbry">
                    <Image src={TwitterDark} alt="TwitterImg" width={25} height={25}/>
                    TWITTER
                </a>
            </ContentCell>
        </ContentBox>
    )
}
export default LinkedProfile