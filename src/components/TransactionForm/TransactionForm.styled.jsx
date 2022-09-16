import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  padding: 20px;
  background-color: greenyellow;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

export const Label = styled.label`
  padding: 4px;
  border-bottom: 2px solid red;
`;

export const InputTitle = styled.p`
  color: darkgray;
  margin-bottom: 8px;
  font-size: 12px;
`;

export const Input = styled.input`
  border-radius: 6px;
  border: none;
  font-size: 22px;
  background-color: transparent;
  color: darkgray;
`;

export const Submit = styled.button`
  position: absolute;
  right: 12px;
  bottom: calc(100% + 12px);
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background: none;
  & svg {
    width: 50px;
    height: 50px;
  }
`;
