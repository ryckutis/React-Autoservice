import React from 'react';
import {
  StyledMainDiv,
  StyledPar,
  StyledTitle,
  Wrapper,
} from './ProfessionalExperience.styled';

export default function ProfessionalExperience() {
  return (
    <StyledMainDiv>
      <Wrapper>
        <div>
          <StyledTitle>20+</StyledTitle>
          <StyledPar>Professional</StyledPar>
        </div>
        <div>
          <StyledTitle>10+</StyledTitle>
          <StyledPar>Years Experience</StyledPar>
        </div>
        <div>
          <StyledTitle>12K+</StyledTitle>
          <StyledPar>Service Closed</StyledPar>
        </div>
        <div>
          <StyledTitle>100%</StyledTitle>
          <StyledPar>Customer Satisfaction</StyledPar>
        </div>
      </Wrapper>
    </StyledMainDiv>
  );
}
