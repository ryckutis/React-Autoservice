import React, { useState } from 'react';
import {
  StyledBtn,
  StyledDiv,
  StyledPar,
  StyledQ,
  Wrapper,
} from './Question.styled';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function Question({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [divHeight, setDivHeight] = useState(112);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
    setDivHeight(isExpanded ? 112 : 226);
  }

  return (
    <StyledDiv style={{ height: `${divHeight}px` }}>
      <Wrapper>
        <StyledQ>{question}</StyledQ>
        <StyledBtn onClick={toggleExpanded} isExpanded={isExpanded}>
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </StyledBtn>
      </Wrapper>
      <StyledPar isExpanded={isExpanded}>{answer}</StyledPar>
    </StyledDiv>
  );
}
