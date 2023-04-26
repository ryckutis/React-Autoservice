import React from "react";
import {
  StyledTestimonialHeader,
  StyledCardDiv,
  StyledCardsDiv,
  StyledCardsTab,
  StyledTestimonialFooter,
} from "../Testimonials/Testimonials.styled";

export default function Testimonials() {
  return (
    <StyledTestimonialHeader>
      <h1>Our customers say the nicest things about our service</h1>
      <StyledCardsTab>
        <StyledCardsDiv>
          <StyledCardDiv>
            <img
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="user-photo1"
            />
            <div>
              <h3>Jonathan Vallem</h3>
              <p>New york</p>
            </div>
          </StyledCardDiv>
          <div>
            <p>
              I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car in a short
              comprehensive look on all the working
            </p>
          </div>
        </StyledCardsDiv>
        <StyledCardsDiv>
          <StyledCardDiv>
            <img
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="user-photo2"
            />
            <div>
              <h3>Smith Johnson</h3>
              <p>New york</p>
            </div>
          </StyledCardDiv>
          <div>
            <p>
              I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car in a short
              comprehensive look on all the working
            </p>
          </div>
        </StyledCardsDiv>
      </StyledCardsTab>
      <StyledTestimonialFooter>
        <div>
          <p>-----</p>
        </div>
        <div>
          <p>icon icon</p>
        </div>
      </StyledTestimonialFooter>
    </StyledTestimonialHeader>
  );
}
