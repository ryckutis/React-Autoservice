import React from 'react';
import WhiteCar from '../../../../assets/white-car-front.png';
import CarBattery from '../../../../assets/car-battery.png';
import { StyledDiv, StyledImageDiv, StyledLink } from './ContactUs.styled';

export default function ContactUs() {
  return (
    <StyledDiv>
      <StyledImageDiv>
        <img src={WhiteCar} alt="The front of a white car" />
        <div>
          <h1>Get in touch with us for your service related query</h1>
          <StyledLink to="/contact">Contact Us</StyledLink>
        </div>
      </StyledImageDiv>
      <img src={CarBattery} alt="A wired car battery" />
    </StyledDiv>
  );
}
