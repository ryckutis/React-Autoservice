import styled from 'styled-components';

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
    background-color: orange;
    width: 60%;
    height: 100%;
    left: 40%;
    top: 0;

    h1 {
      margin: 0 4rem;
      color: var(--white-color);
    }

    button {
      margin: 2rem 4rem;
      padding: 0.5rem 1rem;
      width: max-content;
    }
  }
`;
