import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

export const StylesTeamHeader = styled.header`
  h1 {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 6rem;
  }
`;

export const StylesTeamcard = styled.div`
  :hover {
    border: 0.1rem solid blue;
  }
  padding: 0rem;

  img {
    height: 100%;
    width: 100%;
  }

  div {
    h6 {
      margin: 1rem;
    }

    p {
      margin: 1rem;
      color: var(--secondary-color);
    }
    background-color: var(--primary-color);
    color: white;
  }
`;

export const StyledGridDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  div {
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
