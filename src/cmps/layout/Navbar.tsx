import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return  (
  <NavbarContainer>
      <NavbarTitle>GorillaJungle</NavbarTitle>
  </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 1rem;
  background: #282a36;
  height: 65px;
`;

const NavbarTitle = styled.h1`
color: white;
font-family: ${props => props.theme.fonts.gorillaFont};
color: ${({theme}) => theme.colors.primaryColor}

`
