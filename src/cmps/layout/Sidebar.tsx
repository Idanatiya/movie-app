import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/imgs/app-logo.png';
import {NavLink} from 'react-router-dom';
function Sidebar() {
  return (
    <SidebarContainer>
        <div>
            <img src={logo} />
        </div>
        <LinksContainer>
            {/* <NavLink to="/">
                <img src="../assets/imgs/3d-glasses.svg" alt="movies" />
            </NavLink> */}
        </LinksContainer>
    </SidebarContainer>
  ) 
}

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.4;
  height: 100vh;
  width: 5rem;
  background:  #282a36;
`;

const LinksContainer = styled.div`

`
