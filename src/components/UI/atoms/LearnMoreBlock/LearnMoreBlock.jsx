import React from 'react';

import {
  Wrapper,
  StyledInput,
  StyledPar,
  StyledH3,
  StyledAiFillDollarCircle,
  StyledBsPersonCircle,
  StyledBsWrenchAdjustableCircle,
  StyledDivOne,
  StyledDivTwo,
  StyledButton,
  StyledHEadingOne,
  StyledHeadingTwo,
  StyledATag,
  StyledHiArrowLongRight,
} from './LearnMoreBlock.styled';

export default function LearnMoreBlock() {
  return (
    <Wrapper>
      <StyledDivOne>
        <StyledHEadingOne>
          {' '}
          We are taking car servicing seriously
        </StyledHEadingOne>
        <div>
          <StyledBsWrenchAdjustableCircle />

          <StyledH3> Convenient service</StyledH3>
          <br />
          <StyledPar>it his mother since real had half every him.</StyledPar>
        </div>
        <div>
          <StyledBsPersonCircle />
          <StyledH3> Expert mechanics</StyledH3>
          <br />
          <StyledPar>
            Through True Rich Attended does no end it his mother since real had
            half every him.
          </StyledPar>
        </div>
        <div>
          <StyledAiFillDollarCircle />
          <StyledH3>Transparent pricing</StyledH3>
          <br />
          <StyledPar>
            Through True Rich Attended does no end it his mother since real had
            half every him.
          </StyledPar>
        </div>
        <StyledATag href='#'>Know more about us </StyledATag>
        <StyledHiArrowLongRight />
      </StyledDivOne>
      <StyledDivTwo>
        <StyledHeadingTwo>Get a quote for the car service</StyledHeadingTwo>
        <StyledInput
          type='text'
          name=''
          id=''
          placeholder='Enter your location'
        />
        <br />
        <StyledInput
          type='text'
          name=''
          id=''
          placeholder='Enter your location'
        />
        <br />
        <StyledInput
          type='text'
          name=''
          id=''
          placeholder='Enter your location'
        />
        <br />
        <StyledInput
          type='text'
          name=''
          id=''
          placeholder='Your phone number'
        />{' '}
        <br />
        <StyledButton>Get your quote</StyledButton>
      </StyledDivTwo>
    </Wrapper>
  );
}

