import React from 'react';
import {
  StyledMainDiv,
  StyledMainInfoDiv,
  StyledPictureDiv,
  StyledDiagnoseDiv,
  StyledDiagnoseHeading,
  StyledDiagnosePar,
  StyledLink,
} from './DiagnoseCarProblems.styled';
import tyres from '../../../../assets/tyres.png';
import nissanSkyline from '../../../../assets/nissan-skyline-front.png';

export default function DiagnoseCarProblems() {
  return (
    <StyledMainDiv>
      <StyledMainInfoDiv>
        <StyledPictureDiv>
          <img src={tyres} alt="Volkswagen" />
          <img src={nissanSkyline} alt="Car is being repaired" />
        </StyledPictureDiv>
        <StyledDiagnoseDiv>
          <StyledDiagnoseHeading>Diagnose Car Problems If You Don't Know Much About Cars</StyledDiagnoseHeading>
          <StyledDiagnosePar>
            We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the
            cause. This includes everything from struts, shocks, and tie rod ends to ball joints, springs everything
            from struts, shocks, and tie rod ends to ball joints, springs
          </StyledDiagnosePar>
          <StyledLink to="/contact">Book a Service</StyledLink>
        </StyledDiagnoseDiv>
      </StyledMainInfoDiv>
    </StyledMainDiv>
  );
}
