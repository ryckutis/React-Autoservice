import React from 'react';
import OtherServices from '../../atoms/OtherServices/OtherServices';
import ServiceInfo from '../../atoms/ServiceInfo/ServiceInfo';
import { StyledSection, StyledDiv } from './SingleServiceBody.styled';

export default function SingleServiceBody({ service }) {
  return (
    <StyledSection>
      <h1>{service}</h1>
      <StyledDiv>
        <OtherServices />
        <ServiceInfo />
      </StyledDiv>
    </StyledSection>
  );
}
