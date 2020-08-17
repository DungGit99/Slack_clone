import React from 'react';
import styled from 'styled-components';
import { Status } from './Sidebar';

const MessagesTitles = styled.div`
  margin: 2rem 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h2 {
    font-size: 1rem;
  }
`;
const MessageItem = styled.li`
  margin: 0.25rem 0;
`

function DirectMessage() {
  const channels = ["Bot", 'js', 'react']
  return (
    <>
      <MessagesTitles>
        <h2>Channels</h2>
        <i className="fas fa-plus"></i>
      </MessagesTitles>
      <ul>
        {channels.map( item => <MessageItem key={item}><Status></Status> {item}</MessageItem>)}
      </ul>
    </>
  );
}

export default DirectMessage;