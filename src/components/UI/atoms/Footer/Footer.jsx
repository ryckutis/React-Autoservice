import React from 'react';
import Logo from '../../../../assets/finsweet-logo-light.png';
import { StyledDiv, StyledA } from './Footer.styled';

export default function footer() {
  return (
    <StyledDiv>
      <img src={Logo} alt="logo" />
      <StyledA href="">Home</StyledA>
      <StyledA href="">About us</StyledA>
      <StyledA href="">Services</StyledA>
      <StyledA href="">Blog</StyledA>
      <StyledA href="">Contact us</StyledA>
      <p>@ Copyright Finsweet 2021</p>
    </StyledDiv>
  );
}
