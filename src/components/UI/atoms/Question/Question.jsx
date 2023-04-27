import React from 'react';
import { StyledBtn, StyledDiv, StyledPar, Wrapper } from './Question.styled';

export default function Question({ question, answer }) {
  return (
    <StyledDiv>
      <Wrapper>
        <StyledPar>{question}</StyledPar>
        <StyledBtn>+</StyledBtn>
      </Wrapper>
      {/* <p>{answer}</p> */}
    </StyledDiv>
  );
}
