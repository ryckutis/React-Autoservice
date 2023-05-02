import React from 'react';
import { StyledDiv, StyledImg, StyledLink, StyledMainDiv } from './OurServices.styled';

export default function OurServices({ imgSrc, hText }) {
  return (
    <StyledMainDiv>
      <StyledImg src={imgSrc} alt="porsche" />
      <StyledDiv>
        <h1>{hText}</h1>
        <p>
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we
          up ecstatic unsatiable saw Through True Rich Attended does{' '}
        </p>
        <StyledLink to="/contact">Book a Service</StyledLink>
      </StyledDiv>
    </StyledMainDiv>
  );
}
