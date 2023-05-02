import React from 'react';
import { StyledBlogDiv, StyledButtonDiv, StyledInfoDiv, StyledInfoWrapper, StyledWrapper } from './OurBlog.styled';

export default function OurBlog() {
  return (
    <StyledWrapper>
      <StyledBlogDiv>
        <h1>Our Blog</h1>
      </StyledBlogDiv>

      <StyledInfoWrapper>
        <StyledInfoDiv>
          <h6>TRENDING</h6>
          <h4>Diagnose Car Problems If You Don't Know Much About Cars</h4>
          <p>
            We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the
            cause. This includes, We provide a full range of front end mechanical.
          </p>
          <StyledButtonDiv>
            <button>Read more</button>
            <p>Posted on October 6th 2021</p>
          </StyledButtonDiv>
        </StyledInfoDiv>
      </StyledInfoWrapper>
    </StyledWrapper>
  );
}
