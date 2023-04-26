import React from 'react';
import {
  StyledCenteredRow,
  StyledMainDiv,
  StyledPar,
  StyledRow,
  StyledSubtitle,
  StyledTitle,
  Wrapper,
} from './ProfessionalExperience.styled';
import { BsCircleSquare } from 'react-icons/bs';
import { WiSunset } from 'react-icons/wi';
import { GrCircleInformation } from 'react-icons/gr';
import { CgDarkMode } from 'react-icons/cg';
import { AiOutlineArrowsAlt } from 'react-icons/ai';

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
      <div>
        <StyledCenteredRow>
          <StyledSubtitle>Brands we Serve</StyledSubtitle>
        </StyledCenteredRow>

        <StyledRow>
          <StyledPar>
            <AiOutlineArrowsAlt />
            logoipsum*
          </StyledPar>
          <StyledPar>
            <CgDarkMode />
            logoipsum*
          </StyledPar>
          <StyledPar>
            <GrCircleInformation />
            logoipsum
          </StyledPar>
          <StyledPar>
            <WiSunset />
            logoipsum
          </StyledPar>
          <StyledPar>
            <BsCircleSquare />
            logoipsum
          </StyledPar>
        </StyledRow>
        <StyledRow>
          <StyledPar>
            <AiOutlineArrowsAlt />
            logoipsum*
          </StyledPar>
          <StyledPar>
            <CgDarkMode />
            logoipsum*
          </StyledPar>
          <StyledPar>
            <GrCircleInformation />
            logoipsum
          </StyledPar>
          <StyledPar>
            <WiSunset />
            logoipsum
          </StyledPar>
          <StyledPar>
            <BsCircleSquare />
            logoipsum
          </StyledPar>
        </StyledRow>
      </div>
    </StyledMainDiv>
  );
}
