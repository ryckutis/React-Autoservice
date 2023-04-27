import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledOtherServicesDiv = styled.div`
  width: 20%;
  height: 100%;
  padding: 2rem;
  background-color: var(--grey-background);

  h5 {
    margin: 0 0 2rem 0;
  }
`;

export const StyledOtherServicesCard = styled(Link)`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  color: var(--primary-color);
  background-color: var(--white-color);
  padding: 1rem;
  margin-top: 1.25rem;
  :hover {
    background-color: var(--orange-color);
    color: white;
  }
  span {
    font-size: 32px;
  }
  h6 {
    margin: 0;
  }
`;
