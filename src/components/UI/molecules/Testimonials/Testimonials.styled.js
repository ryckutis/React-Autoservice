import styled from "styled-components";

export const StyledTestimonialHeader = styled.header`
  background: #f2f2f2;
  //   margin: auto;
  h1 {
    text-align: center;
    margin: 0;
    padding-top: 120px;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-bottom: 94px;
  }
`;

export const StyledCardsTab = styled.div`
  display: flex;

  align-items: center;
  gap: 4rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const StyledCardsDiv = styled.div`
  display: flex;
  flex-direction: column;

  background: white;
  border: 0.5px solid grey;
  /* max-width: 50%; */
  padding: 1.5rem;
`;

export const StyledCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 15%;
    border-radius: 90%;
  }
`;

export const StyledTestimonialFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 5rem;
  padding-right: 5rem;
`;
