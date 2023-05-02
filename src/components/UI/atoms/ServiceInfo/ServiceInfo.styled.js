import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 60%;
  margin: 0 auto;

  img {
    width: 100%;
  }

  h4,
  h5 {
    margin: 3rem 0 1rem 0;
  }

  p {
    color: var(--par-color);
    opacity: 0.7;
    margin-bottom: 2rem;
  }
`;

export const StyledPar = styled.p`
  position: relative;
  padding: 1rem 0 1rem 2rem;
  ::before {
    position: absolute;
    content: '';
    background: var(--primary-color);
    height: 100%;
    width: 2px;
    left: 0;
    top: 0;
  }
`;
