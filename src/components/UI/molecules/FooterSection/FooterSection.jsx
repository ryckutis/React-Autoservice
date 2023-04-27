import React from 'react';
import Footer from '../../atoms/Footer/Footer';
import {
  StyledMainDiv,
  StyledMainInfoDiv,
  StyledGetInTouchHeading,
  StyledGetInTouchDiv,
  StyledIconsDiv,
  StyledIconsFacebook,
  StyledIconsTwitter,
  StyledIconsInstagram,
  StyledIconsLinkedIn,
  StyledMainContactDiv,
  StyledContactDiv,
  StyledContactPar,
  StyledContactHeading,
} from './FooterSection.styled';

export default function FooterSection() {
  return (
    <div>
      <StyledMainDiv>
        <StyledMainInfoDiv>
          <StyledGetInTouchDiv>
            <StyledGetInTouchHeading>Get in touch with us for your service</StyledGetInTouchHeading>
            <StyledIconsDiv>
              <StyledIconsFacebook />
              <StyledIconsTwitter />
              <StyledIconsInstagram />
              <StyledIconsLinkedIn />
            </StyledIconsDiv>
          </StyledGetInTouchDiv>
          <StyledMainContactDiv>
            <StyledContactDiv>
              <StyledContactPar>Help line Number</StyledContactPar>
              <StyledContactHeading>1800 265 24 52</StyledContactHeading>
            </StyledContactDiv>
            <StyledContactDiv>
              <StyledContactPar>Address</StyledContactPar>
              <StyledContactHeading>NH 234 Public Square San Francisko 65368</StyledContactHeading>
            </StyledContactDiv>
            <StyledContactDiv>
              <StyledContactPar>We are open</StyledContactPar>
              <StyledContactHeading>Monday to Friday 9:00 AM to 10:00 AM</StyledContactHeading>
            </StyledContactDiv>
          </StyledMainContactDiv>
        </StyledMainInfoDiv>
      </StyledMainDiv>
      <Footer />
    </div>
  );
}
