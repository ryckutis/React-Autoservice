import React from 'react';
import {
  StyledContainer,
  StyledFirstBox,
  StyledSecondBox,
  StyledThirdBox,
} from './ThreeServices.styled';

export default function ThreeServices() {
  return (
    <StyledContainer>
      <StyledFirstBox>
        <h4>Serve our customers and always deliver the customer service</h4>
        <p>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes
        </p>
      </StyledFirstBox>
      <StyledSecondBox>
        <h4>To be the world’s most eader in automotive business solutions.</h4>
        <p>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes
        </p>
      </StyledSecondBox>
      <StyledThirdBox>
        <h4>
          We value the service we provide and our loyal returning customers
        </h4>
        <p>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes
        </p>
      </StyledThirdBox>
    </StyledContainer>
  );
}
