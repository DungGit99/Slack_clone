import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  padding: 1rem;
  border-radius: 7px;
  border: 3px solid darkgrey;
  font-size: 1rem;
  position: fixed;
  bottom: 10px;
  width: calc(100vw - 220px);
  &:hover, &:active, &:focus {
    boder: 3px solid DimGray;
  }
  box-sizing: border-box;
  position: fixed;
  bottom: 10px;
  width: calc(100vw - 220px);
`
const SubmitButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  border-left: 3px solid;
  position: fixed;
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1rem;
  right: 27px;
  bottom: 13px;
  cursor: pointer;
`;

function InputMessage() {
  return (
    <form>
      <InputStyle type="text" placeholder="Message" />
      <SubmitButton type="submit">
        <i className="fas fa-arrow-alt-circle-right" />
      </SubmitButton>
    </form>
  );
}

export default InputMessage;