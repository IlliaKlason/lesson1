import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background: none;
  & svg {
    width: 30px;
    height: 30px;
  }
`;
