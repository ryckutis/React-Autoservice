import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 50px;
  width: var(--primary-width);
  margin: 2rem auto;
  display: flex;
  justify-content: space-evenly;
  background: #f5f5f5;
`;

const StyledSection = styled.section`
  width: 50%;
  margin-top: 2rem;
  margin-left: 50px;
  margin-right: 50px;
`;

export const StyledSecondarySection = styled.section`
  margin-left: 50px;
  margin-right: 50px;

  div {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    img {
      height: 100%;
    }

    div {
      padding-left: 1rem;
      display: flex;
      flex-direction: column;

      h6 {
        margin: 0;
      }
    }
  }
`;

const StyledP = styled.p`
  color: gray;
  text-align: left;
  align-self: flex-start;
`;

const StyledButton = styled.button`
  padding-left: 0;
  border: none;
  border-right: 2px solid black;
`;

export { StyledDiv, StyledSection, StyledP, StyledButton };
