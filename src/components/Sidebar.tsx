import React from 'react';
import styled from 'styled-components';
import Channels from './Channels';
import DirectMessage from './DirectMessage';

const SidebarContainer = styled.div`
  height: 100%;
  background: rebeccapurple;
  padding: 1rem;
  color: white;
`
const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 25px;
`
const H1 = styled.h1`
  font-weight: 900;
  font-size: 1.3rem;
`
const UsernameContainer = styled.div`
  font-size: 1rem;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-top: 0.5rem
`
export const Status = styled.span`
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 100%;
  background-color: #2bd028;
  display: inline-block;
  margin-right: 0.5rem;
`

function Sidebar() {
  return (
    <SidebarContainer>
      <Header>
        <H1>Slack clone</H1>
        <div>
          <i className="fas fa-bell"></i>
        </div>
        <UsernameContainer>
          <Status></Status>
          Dung code
        </UsernameContainer>
      </Header>
      <Channels/>
      <DirectMessage/>
    </SidebarContainer>
  );
}

export default Sidebar;