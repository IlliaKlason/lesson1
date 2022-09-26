import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 16px 16px;

  background-color: greenyellow;
`;
export const Button = styled(Link)`
  min-width: 150px;
  padding: 12px;
  font-size: 20px;
  background-color: grey;
  text-decoration: none;
  color: black;
`;
