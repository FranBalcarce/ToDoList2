import styled from 'styled-components';
import { NavLink} from 'react-router-dom';


const NavbarContainer = styled.header`
  display: flex;
  align-items: centers;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;



const LinkContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: #e6e4e4;
  &.active {
    color: #2e2e2e;
    font-weight: 600;
  }
`

const Navbar = () => {


  return (
    <NavbarContainer>
      
      <LinkContainer>
        <NavLinkStyled to="/" >Home</NavLinkStyled>
        <NavLinkStyled to="/ToDoApp" >ToDoList</NavLinkStyled>   
        <NavLinkStyled to="/PokeApi" >PokeApi</NavLinkStyled> 
        
        
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;