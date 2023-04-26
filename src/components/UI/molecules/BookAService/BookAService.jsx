import React from 'react';
import Mechanic from '../../../../assets/mechanic.png';

import {
  StyledHEadingOne,
  StyledLinkWrap,
  StyledLink,
  Wrapper,
  StyledDivOne,
  StyledDivTwo,
  StyledPar,
  StyledPar2,
  StyledAiOutlineClockCircle,
  StyledBottomDiv,
  StyledImage,
} from './BookAService.styled';

export default function BookAService() {
  return (
    <Wrapper>
      <StyledDivOne>
        <StyledHEadingOne>Get your vehicle service done online at one place</StyledHEadingOne>
        <StyledLinkWrap>
          <StyledLink to="/services">Book a service</StyledLink>
        </StyledLinkWrap>
        <StyledBottomDiv>
          <StyledAiOutlineClockCircle />
          <div>
            <StyledPar>We are open </StyledPar>
            <br />
            <StyledPar2>Monday to Friday 9:00 AM to 10:00 AM</StyledPar2>
          </div>
        </StyledBottomDiv>
      </StyledDivOne>
      <StyledDivTwo>
        <StyledImage src={Mechanic} alt="Mechanic working on a car" />
      </StyledDivTwo>
    </Wrapper>
  );
}
