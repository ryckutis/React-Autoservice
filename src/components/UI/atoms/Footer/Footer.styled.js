import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  background-color: #1e1b1b;
  color: #939191;
  align-items: center;
`;
const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;

  :hover {
    opacity: 0.6;
  }
`;

export { StyledDiv, StyledLink };
