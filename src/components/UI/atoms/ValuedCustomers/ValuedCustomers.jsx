import React from 'react';
import {
  StyledAiOutlineDollar,
  StyledBackgroundDiv,
  StyledCardDiv,
  StyledGoGear,
  StyledH,
  StyledMainDiv,
  StyledPar,
  StyledSection,
  StyledTitle,
  StyledUser,
} from './ValuedCustomers.styled';

export default function ValuedCustomers() {
  return (
    <StyledBackgroundDiv>
      <StyledMainDiv>
        <StyledTitle>Services we provide to our valued customers</StyledTitle>
        <StyledSection>
          <StyledCardDiv>
            <StyledGoGear />
            <StyledH>Convenient Service</StyledH>
            <StyledPar>
              Through True Rich Attended does no end it his mother since real had half every him end
              it his mother
            </StyledPar>
          </StyledCardDiv>
          <StyledCardDiv>
            <StyledUser />
            <StyledH>Expert Mechanics</StyledH>
            <StyledPar>
              Through True Rich Attended does no end it his mother since real had half every him end
              it his mother
            </StyledPar>
          </StyledCardDiv>
          <StyledCardDiv>
            <StyledAiOutlineDollar />
            <StyledH>Transparent Pricing</StyledH>
            <StyledPar>
              Through True Rich Attended does no end it his mother since real had half every him end
              it his mother
            </StyledPar>
          </StyledCardDiv>
        </StyledSection>
      </StyledMainDiv>
    </StyledBackgroundDiv>
  );
}
