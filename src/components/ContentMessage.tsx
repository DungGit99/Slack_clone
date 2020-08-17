import React from 'react';
import ContentHeader from './ContentHeader';
import styled from 'styled-components';
import BoxMessage from './BoxMessage';
import InputMessage from './InputMessage';

const Container = styled.div`
  padding: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function ContentMessage() {
  return (
    <Container>
      <ContentHeader/>
      <BoxMessage/>
      <InputMessage/>
    </Container>
  );
}

export default ContentMessage;