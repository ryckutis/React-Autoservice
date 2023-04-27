import React from 'react';
import {
  Wrapper,
  StyledDiv,
  StyledPicture,
  StyledDate,
  StyledHeader,
  StyledPar,
} from './GridBlogs.styled';

import Tires from '../../../../assets/Tires.png';
import Speed from '../../../../assets/Speedometer.png';
import Mercedess from '../../../../assets/Mercedess.png';
import ToolsPic from '../../../../assets/Tools.png';
import CarInsideWhite from '../../../../assets/CarInside.png';
import CarInsideBlack from '../../../../assets/CarInsideBlack.png';

export default function GridBlogs() {
  return (
    <Wrapper>
      <StyledDiv>
        <StyledPicture src={Speed} alt='' />
        <StyledDate>Posted on October 6th 2021</StyledDate>
        <StyledHeader>Should I Buy a New Car or Lease a New Car in 2021?</StyledHeader>
        <StyledPar>
          We provide a full range of front end mechanical repairs for all makes
          and models We provide a full range of front end mechanical repairs for
          all makes and models
        </StyledPar>
      </StyledDiv>
      <StyledDiv>
        <StyledPicture src={CarInsideBlack} alt='' />
        <StyledDate>Posted on October 6th 2021</StyledDate>
        <StyledHeader>Should I Buy a New Car or Lease a New Car in 2021?</StyledHeader>
        <StyledPar>
          We provide a full range of front end mechanical repairs for all makes
          and models We provide a full range of front end mechanical repairs for
          all makes and models
        </StyledPar>
      </StyledDiv>
      <StyledDiv>
        <StyledPicture src={ToolsPic} alt='' />
        <StyledDate>Posted on October 6th 2021</StyledDate>
        <StyledHeader>Should I Buy a New Car or Lease a New Car in 2021?</StyledHeader>
        <StyledPar>
          We provide a full range of front end mechanical repairs for all makes
          and models We provide a full range of front end mechanical repairs for
          all makes and models
        </StyledPar>
      </StyledDiv>
      <StyledDiv>
        <StyledPicture src={Tires} alt='' />
        <StyledDate>Posted on October 6th 2021</StyledDate>
        <StyledHeader>Should I Buy a New Car or Lease a New Car in 2021?</StyledHeader>
        <StyledPar>
          We provide a full range of front end mechanical repairs for all makes
          and models We provide a full range of front end mechanical repairs for
          all makes and models
        </StyledPar>
      </StyledDiv>
      <StyledDiv>
        <StyledPicture src={CarInsideWhite} alt='' />
        <StyledDate>Posted on October 6th 2021</StyledDate>
        <StyledHeader>Should I Buy a New Car or Lease a New Car in 2021?</StyledHeader>
        <StyledPar>
          We provide a full range of front end mechanical repairs for all makes
          and models We provide a full range of front end mechanical repairs for
          all makes and models
        </StyledPar>
      </StyledDiv>
      <StyledDiv>
        <StyledPicture src={Mercedess} alt='' />
        <StyledDate>Posted on October 6th 2021</StyledDate>
        <StyledHeader>Should I Buy a New Car or Lease a New Car in 2021?</StyledHeader>
        <StyledPar>
          We provide a full range of front end mechanical repairs for all makes
          and models We provide a full range of front end mechanical repairs for
          all makes and models
        </StyledPar>
      </StyledDiv>
    </Wrapper>
  );
}
