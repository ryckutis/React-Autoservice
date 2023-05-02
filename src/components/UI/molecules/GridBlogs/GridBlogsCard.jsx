import React from 'react';
import { StyledDiv, StyledPicture, StyledDate, StyledHeader, StyledPar } from './GridBlogs.styled';

export default function GridBlogsCard({ image, link }) {
  return (
    <StyledDiv>
      <StyledPicture src={image} alt="something" />
      <StyledDate>Posted on October 6th 2021</StyledDate>
      <StyledHeader to={link}>Should I Buy a New Car or Lease a New Car in 2021?</StyledHeader>
      <StyledPar>
        We provide a full range of front end mechanical repairs for all makes and models We provide a full range of
        front end mechanical repairs for all makes and models
      </StyledPar>
    </StyledDiv>
  );
}
