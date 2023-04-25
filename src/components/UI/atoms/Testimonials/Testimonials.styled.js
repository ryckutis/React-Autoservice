import styled from "styled-components";

export const StyledTestimonialHeader = styled.header`
  background: #f2f2f2;
  //   margin: auto;
  h1 {
    text-align: center;
    padding: 50px;
  }
`;

export const StyledCardsTab = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding-left: 50px;
  padding-right: 50px;

  //   margin-bottom: 50px;
  //   background: white;
`;

export const StyledCardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  max-width: 50%;

  img {
    width: 15%;
    border-radius: 30%;
  }
`;

export const StyledCardDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
