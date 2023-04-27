import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMainDiv = styled.div`
  width: 1280px;
  height: 550px;
  position: relative;
  margin: 5em auto;
`;

export const StyledImg = styled.img`
  height: 550px;
  width: 818px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const StyledDiv = styled.div`
  background: var(--primary-color);
  height: 550px;
  width: 733px;
  position: absolute;
  right: 0;
  top: 0;
  color: var(--grey-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  h1 {
    font-weight: 800;
    margin: 0 1.3em;
  }

  p {
    font-weight: 500;
    font-size: var(--par-large);
    padding: 1em 5em;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--white-color);
  background: var(--orange-color);
  border: 1px solid var(--orange-color);
  border-radius: 12px;
  padding: 16px 40px;
  text-decoration: none;
  margin: 0 5.5em;

  :hover {
    cursor: pointer;
    background: #d15a36;
    border: 1px solid #d15a36;
  }
`;
