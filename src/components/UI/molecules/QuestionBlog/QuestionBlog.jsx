import React from 'react';
import Car1 from '../../../../assets/car-image1.png';
import Car2 from '../../../../assets/car-image2.png';
import Car3 from '../../../../assets/car-image3.png';
import Car4 from '../../../../assets/car-image4.png';
import {
  StyledDiv,
  StyledSection,
  StyledSecondarySection,
  StyledP,
  StyledButton,
} from './QuestionBlog.styled';

export default function Section() {
  return (
    <StyledDiv>
      <StyledSection>
        <img src={Car1} alt="car" />
        <StyledP>Posted on October 6th 2021</StyledP>
        <h5>Should I Buy a New Car or Lease a New Car in 2021?</h5>
        <StyledP>
          We provide a full range of front end mechanical repairs for all makes and models of cars,
          no matter the cause. This includes, We provide a full range of front end mechanical.
        </StyledP>
        <StyledButton>Read more </StyledButton>
      </StyledSection>
      <StyledSecondarySection>
        <div>
          <img src={Car2} alt="car" />
          <div>
            <h6>Get an Awesome Number Plate for Your New Car</h6>
            <StyledP>Posted on October 6th 2021</StyledP>
          </div>
        </div>
        <div>
          <img src={Car3} alt="car" />
          <div>
            <h6>Would you Let a Robot Drive your Car? Our AI Future</h6>
            <StyledP>Posted on October 6th 2021</StyledP>
          </div>
        </div>
        <div>
          <img src={Car4} alt="car" />
          <div>
            <h6>Will Electric Technology Soon Rule The Road?</h6>
            <StyledP>Posted on October 6th 2021</StyledP>
          </div>
        </div>
      </StyledSecondarySection>
    </StyledDiv>
  );
}
