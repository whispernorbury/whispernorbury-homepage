import styled from 'styled-components'

const NavContainer = styled.div`
    position: fixed;
    right: 80px;
    top: 50px;
    height: 4em;
    display: flex;
`
const NavCell = styled.div`
    cursor: pointer;
    a { text-decoration: none; }
`
const Navigation : React.FC = () => {
    return (
        <NavContainer>
            <NavCell>

            </NavCell>
        </NavContainer>
    )
}

export default Navigation