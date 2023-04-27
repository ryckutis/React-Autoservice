import React from 'react';
import {
  StyledFlexContainer,
  StyledMainDiv,
  StyledName,
  StyledNumber,
  StyledPar,
  StyledSection,
  StyledImgSection,
} from './ExpertService.styled';

import CarRepair from '../../../../assets/car-repair.png';

export default function ExpertService() {
  return (
    <StyledMainDiv>
      <StyledSection>
        <h2>We Provide Expert Service and aim to have a long term with you</h2>
        <StyledPar>
          We provide a full range of front end mechanical repairs for all makes and models of cars,
          no matter
        </StyledPar>
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
            <StyledPar>Through True Rich Attended does no end it his mother since real</StyledPar>
          </div>
        </StyledFlexContainer>
        <StyledFlexContainer>
          <StyledNumber>03</StyledNumber>
          <div>
            <StyledName>Get your Service Done</StyledName>
            <StyledPar>
              Ecstatic insatiable saw his giving Remain expense you position concluded.
            </StyledPar>
          </div>
        </StyledFlexContainer>
      </StyledSection>
      <StyledImgSection>
        <img src={CarRepair} alt="car-repair" />
      </StyledImgSection>
    </StyledMainDiv>
  );
}
