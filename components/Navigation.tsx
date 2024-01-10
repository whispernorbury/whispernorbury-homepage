import styled from 'styled-components'

const NavContainer = styled.div`
    position: fixed;
    right: 80px;
    top: 60px;
    height: 4em;
    display: flex;
`
const Navigation : React.FC = () => {
    return (
        <NavContainer>
            <a href='#'>top</a>
        </NavContainer>
    )
}

export default Navigation