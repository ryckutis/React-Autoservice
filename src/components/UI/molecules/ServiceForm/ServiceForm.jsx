import React from 'react';
import {
  Wrapper,
  StyledInput,
  StyledPar,
  StyledH6,
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
} from './ServiceForm.styled';

export default function ServiceForm() {
  return (
    <div>
      <Wrapper>
        <StyledDivOne>
          <StyledHEadingOne> We are taking car servicing seriously</StyledHEadingOne>
          <div>
            <StyledBsWrenchAdjustableCircle />

            <StyledH6> Convenient service</StyledH6>
            <br />
            <StyledPar>it his mother since real had half every him.</StyledPar>
          </div>
          <div>
            <StyledBsPersonCircle />
            <StyledH6> Expert mechanics</StyledH6>
            <br />
            <StyledPar>
              Through True Rich Attended does no end it his mother since real had half every him.
            </StyledPar>
          </div>
          <div>
            <StyledAiFillDollarCircle />
            <StyledH6>Transparent pricing</StyledH6>
            <br />
            <StyledPar>
              Through True Rich Attended does no end it his mother since real had half every him.
            </StyledPar>
          </div>
          <StyledATag href="#">Know more about us </StyledATag>
          <StyledHiArrowLongRight />
        </StyledDivOne>
        <StyledDivTwo>
          <StyledHeadingTwo>Get a quote for the car service</StyledHeadingTwo>
          <StyledInput type="text" name="" id="" placeholder="Enter your location" />
          <br />
          <StyledInput type="text" name="" id="" placeholder="Enter your location" />
          <br />
          <StyledInput type="text" name="" id="" placeholder="Enter your location" />
          <br />
          <StyledInput type="text" name="" id="" placeholder="Your phone number" /> <br />
          <StyledButton>Get your quote</StyledButton>
        </StyledDivTwo>
      </Wrapper>
    </div>
  );
}
