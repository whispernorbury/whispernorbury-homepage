"use client"

import ContentBox from "@/layouts/ContentBox"
import styled from "styled-components"
import Image from "next/image"

const ContentCell = styled.div`
    
`
const LinkedProfile = () => {
    return (
        <ContentBox>
            <ContentCell>
                <a href="https://github.com/whispernorbury">
                    <Image src="@/public/icons/github-mark.svg" alt="github" width={800} height={800}/>
                    GITHUB
                </a>
            </ContentCell>
            <ContentCell>
                <a href="https://www.instagram.com/whispernorbury/">
                    <Image src="@/public/icons/instagram-Glyph-Wine.svg" alt="insta" width={800} height={800}/>
                    INSTAGRAM
                </a>
            </ContentCell>
            <ContentCell>
                <a href="https://twitter.com/whispernbry">
                    <Image src="@/public/icons/instagram-Glyph-Wine.svg" alt="insta" width={800} height={800}/>
                    INSTAGRAM
                </a>
            </ContentCell>
        </ContentBox>
    )
}
export default LinkedProfile