import React from 'react';
import Logo from '../../../../assets/finsweet-logo-light.png';
import { StyledDiv, StyledLink } from './Footer.styled';

export default function footer() {
  return (
    <StyledDiv>
      <img src={Logo} alt="logo" />
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About us</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <StyledLink to="/blog">Blog</StyledLink>
      <StyledLink to="/contact">Contact us</StyledLink>
      <p>@ Copyright Finsweet 2021</p>
    </StyledDiv>
  );
}
