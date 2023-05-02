import React from 'react';
import {
  StyledButton,
  StyledFlexContainer,
  StyledMainDiv,
  StyledName,
  StyledNumber,
  StyledPar,
  StyledSection,
} from './LearnMore.styled';

export default function LearnMore() {
  return (
    <StyledMainDiv>
      <StyledSection>
        <h2>We follow a clear process to help you out.</h2>
        <StyledPar>
          Through True Rich Attended does no end it his mother since real had half every him case in
          packages enquire
        </StyledPar>
        <StyledButton> Learn More</StyledButton>
      </StyledSection>
      <StyledSection>
        <StyledFlexContainer>
          <StyledNumber>01</StyledNumber>
          <div>
            <StyledName> Get a Quote</StyledName>
            <StyledPar>
              Through True Rich Attended does no end it his mother since real had half every
            </StyledPar>
          </div>
        </StyledFlexContainer>
        <StyledFlexContainer>
          <StyledNumber>02</StyledNumber>
          <div>
            <StyledName>Book an Appointment</StyledName>
            <StyledPar>
              Through True Rich Attended does no end it his mother since real had half every
            </StyledPar>
          </div>
        </StyledFlexContainer>
        <StyledFlexContainer>
          <StyledNumber>03</StyledNumber>
          <div>
            <StyledName>Get your Service Done</StyledName>
            <StyledPar>
              Through True Rich Attended does no end it his mother since real had half every
            </StyledPar>
          </div>
        </StyledFlexContainer>
      </StyledSection>
    </StyledMainDiv>
  );
}
