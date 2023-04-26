import React from 'react';
import { BsCircleSquare } from 'react-icons/bs';
import { WiSunset } from 'react-icons/wi';
import { GrCircleInformation } from 'react-icons/gr';
import { CgDarkMode } from 'react-icons/cg';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import {
  StyledCenteredRow,
  StyledMainDiv,
  StyledPar,
  StyledRow,
  StyledSubtitle,
} from './BrandsWeServe.styled';

export default function BrandsWeServe() {
  return (
    <StyledMainDiv>
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
    </StyledMainDiv>
  );
}
