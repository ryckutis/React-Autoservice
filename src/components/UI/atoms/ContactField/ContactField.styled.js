import styled from "styled-components";

export const StyledWrapperDiv = styled.div`
  margin: 0 auto;
  width: 75%;
  h2 {
    max-width: 500px;
  }
`;

export const StyledFlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  input {
    display: block;
    margin-bottom: 5px;
    padding: 1.2rem;
    background-color: #f2f2f2;
    border: none;
    border-radius: 3px;
    ::placeholder {
      color: black;
    }
  }
  select {
    display: block;
    margin-bottom: 5px;
    padding: 1.2rem;
    background-color: #f2f2f2;
    border: none;
    border-radius: 3px;
  }
`;

export const StyledContactDiv = styled.div`
  flex: 1;
  p {
    margin: 0;
  }
  h6 {
    margin: 0;
    padding-bottom: 1em;
  }
`;

export const StyledButton = styled.button`
  color: white;
  background-color: var(--orange-color);
  width: 30%;
  padding: 0.8rem;
  margin-top: 1.5em;
  text-align: center;
  border-radius: 10px;
  border: none;
  max-width: 150px;
  min-width: 110px;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const StyledMapImage = styled.img`
  position: relative;
  width: 100%;
  padding-top: 100px;
  margin-bottom: -10%;
  z-index: 1;
`;

export const StyledBackgroundDiv = styled.div``;

export const StyledBackgroundImage = styled.img`
  position: bottom;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
  margin-bottom: -0.4rem;
`;
