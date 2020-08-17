import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import ContentMessage from './ContentMessage';

const Container = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  width: 100vw;
  height: 100vh;
`;


function Layout() {
  return (
    <Container>
      <Sidebar />
      <ContentMessage/>
    </Container>
  );
}

export default Layout;