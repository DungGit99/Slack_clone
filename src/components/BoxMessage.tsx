import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 85px;
  overflow-Y: auto;
  height: calc(100vh - 185px);
  li {
    margin: 0.5rem 0;
  }
  p {
    margin-top: 0.25rem;
  }
`
const Username = styled.span`
  font-weight: 800;
  margin-right: 5px;
  font-size: 1.2rem;
`;

const DateSpan = styled.span`
  color: darkgrey;
`;
function BoxMessage() {
  const messageListRef = React.createRef<HTMLDivElement>();
  console.log(messageListRef);
  useEffect(() => {
    messageListRef.current!.scrollTo(messageListRef.current!.scrollTop,messageListRef.current!.scrollHeight)
  },[])
  const message = [
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'},
    { message: 'I love you js', user: 'Linh', date: '15/08/2020'}
  ]
  return (
    <Container ref={messageListRef} className="box__message">
      <ul>
        {
          message.map( (item,index) => (
            <li key={index}>
              <Username>{item.user}</Username>
              <DateSpan>{item.date}</DateSpan>
              <p>{item.message}</p>
            </li>
           ) )
        }
      </ul>
    </Container>
  );
}

export default BoxMessage;