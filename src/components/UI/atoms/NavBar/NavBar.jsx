import React from 'react';
import logo from '../../../../assets/finsweet-logo.png';
import { Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledIoMdCall,
  StyledNav,
  StyledNavDiv,
  StyledPar,
} from './NavBar.styled';

export default function NavBar() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <StyledNavDiv>
          <StyledIoMdCall />
          <div>
            <StyledPar>Road Assistance</StyledPar>
            <p>
              <b>1800 265 24 52</b>
            </p>
          </div>
        </StyledNavDiv>
      </StyledNav>
    </StyledHeader>
  );
}
