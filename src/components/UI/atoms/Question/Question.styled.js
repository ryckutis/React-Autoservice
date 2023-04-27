import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin: 0 auto 1em auto;
  max-width: 896px;
  height: 112px;
  background-color: var(--white-color);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  padding: 0 2.5em;

  p {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPar = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
`;

export const StyledBtn = styled.button`
  width: 51.08px;
  height: 48px;
  background-color: #ff6433;
  color: white;
  border: none;
  font-size: 32px;
`;
