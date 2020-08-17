import React from 'react';
import styled from 'styled-components';

const Titles = styled.div`
  margin: 2rem 0 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h2 {
    font-size: 1rem;
  }
`
const ChannelItems = styled.li`
  margin: 0.25rem 0;
`
const Button = styled.button`
  background-color: transparent;
  padding: 5px;
  color: white;
  border: none;
  &.channel-button {
    margin-top: 1rem;
    i {
      margin-right: 5px;
    }
  }
`

function Channels() {
  const channels = ["Nam", 'Linh', 'Duy']
  return (
    <>
      <Titles>
        <h2>Channels</h2>
        <i className="fas fa-plus"></i>
      </Titles>
      <ul>
        {channels.map( item => <ChannelItems key={item}># {item}</ChannelItems>)}
      </ul>
      <Button className="channel-button"><i className="fas fa-plus"></i>Add channel</Button>
    </>
  );
}

export default Channels;