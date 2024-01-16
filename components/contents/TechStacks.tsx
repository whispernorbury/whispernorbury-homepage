import BlockHead from "../BlockHead"
import ContentBox from "../ContentBox"
import ContentCell from "../ContentCell"
import Space from "../Space"
const Stacks = [
    {
        title: "LANGUAGE",
        list: [
            "javascript",
            "typescript",
            "c/c++",
            "python",
            "java",
        ],
    },
    {
        title: "FRONTEND",
        list: [
            "react",
            "nextjs",
            "svelte",
        ],
    },
    {
        title: "BACKEND",
        list: [
            "django",
            "nodejs",
            "spring",
        ],
    },
]
const TechStacks: React.FC = () => {
    return (
        <ContentBox h={'40vh'}>
            <BlockHead fontSize={'1.7em'}>Stacks</BlockHead>
            <Space h={'1.7em'}/>
            <ContentCell w={'30px'}>
                {Stacks.map(ele => (
                    <div key={ele.title}>
                    <BlockHead fontSize={'1.3em'}>{ele.title}</BlockHead>
                    <ContentCell w={'1em'}>{ele.list.map(idx => (<span key={idx}>{idx}, </span>))}...</ContentCell>
                    <Space h={"1.3em"}/>
                    </div>
                ))}
            </ContentCell>
        </ContentBox>
    )
}
export default TechStacks