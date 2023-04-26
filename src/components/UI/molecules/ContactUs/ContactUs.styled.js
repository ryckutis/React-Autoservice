import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 2/1;
    object-fit: cover;
  }
`;

export const StyledImageDiv = styled.div`
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    background-color: var(--orange-color);
    width: 60%;
    height: 100%;
    left: 40%;
    top: 0;

    h1 {
      margin: 0 4rem;
      color: var(--white-color);
    }
  }
`;

export const StyledLink = styled(Link)`
  color: var(--white-color);
  background-color: var(--primary-color);
  margin: 2rem 4rem;
  padding: 0.75rem 1.25rem;
  width: max-content;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  text-decoration: none;
`;
