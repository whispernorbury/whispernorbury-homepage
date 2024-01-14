import styled from "styled-components"

interface Props {
    darkmode : boolean;
}

const Body = styled.body<Props>`
    background-color: ${(props) => (props.darkmode ? '#191919' : '#ffffff')};
    color: ${(props) => (props.darkmode ? '#acbfff' : '#3e5496')};
    ::selection {
        background-color : ${(props) => (props.darkmode ? '#464952' : '#848f9d')};
    }
`
export default Body