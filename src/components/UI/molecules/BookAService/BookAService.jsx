import React from 'react';
import carBattery from '../../../../assets/car-battery.png';

import {
  StyledHEadingOne,
  StyledButton,
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
        <StyledHEadingOne>
          Get your vehicle service done online at one place
        </StyledHEadingOne>
        <StyledButton>Book a service</StyledButton>
        <br />
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
        <StyledImage src={carBattery} alt='' />
      </StyledDivTwo>
    </Wrapper>
  );
}
