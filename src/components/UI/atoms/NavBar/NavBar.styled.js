import styled from 'styled-components';
import { IoMdCall } from 'react-icons/io';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--primary-width);
  margin: auto;
  img {
    width: 10%;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    padding-left: 1rem;
    color: var(--primary-color);
  }
`;

export const StyledIoMdCall = styled(IoMdCall)`
  background-color: var(--green-background);
  color: white;
  border-radius: 50%;
  font-size: 24px;
  padding: 0.5rem;
  margin-right: 1rem;
`;

export const StyledNavDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 8px 0;
  }
  ::before {
    height: 3rem;
    width: 1px;
    content: '';
    background: var(--secondary-color);
    margin: 1rem;
  }
`;

export const StyledPar = styled.p`
  color: var(--secondary-color);
`;
