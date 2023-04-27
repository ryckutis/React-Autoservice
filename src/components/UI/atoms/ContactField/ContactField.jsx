import React from 'react';
import {
  StyledWrapperDiv,
  StyledForm,
  StyledFlexDiv,
  StyledContactDiv,
  StyledButton,
  StyledMapImage,
  StyledBackgroundDiv,
  StyledBackgroundImage,
} from './ContactField.styled';
import map from '../../../../assets/contactField-mapimage.png';
import backgroundImage from '../../../../assets/contactField-image.png';

export default function ContactField() {
  return (
    <StyledBackgroundDiv>
      <StyledWrapperDiv>
        <h2>Get in touch with our experts</h2>
        <StyledFlexDiv>
          <StyledForm>
            <input type="text" placeholder="Your full Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Select service type" />
            <input type="text" placeholder="Message" />
            <StyledButton type="button">Send Message</StyledButton>
          </StyledForm>
          <StyledContactDiv>
            <p>Address</p>
            <h6>NH 234 Public Square San Francisco 65368</h6>
            <p>Contact Details</p>
            <h6>
              1800 265 24 52 <br />
              Finsweet@gmail.com
            </h6>
            <p>Opening Hours</p>
            <h6>Monday to Friday 9:00 AM to 10:00 AM</h6>
          </StyledContactDiv>
        </StyledFlexDiv>
        <StyledMapImage src={map} />
      </StyledWrapperDiv>
      <StyledBackgroundImage src={backgroundImage} />
    </StyledBackgroundDiv>
  );
}
