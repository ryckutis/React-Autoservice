import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 75%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

export const StyledDiv = styled.div`
  margin: 2rem;
`;
export const StyledHeader = styled(Link)`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-primary);

  :hover {
    opacity: 0.6;
  }
`;

export const StyledPicture = styled.img`
  width: 100%;
`;

export const StyledPar = styled.p`
  font-size: 14px;
`;

export const StyledDate = styled.p`
  color: grey;
  font-size: 10px;
`;
