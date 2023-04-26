import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background: var(--grey-background);
  width: 100%;
  padding-bottom: 2rem;
`;

export const StyledTestimonialHeader = styled.header`
  width: var(--primary-width);
  margin: auto;
  h3 {
    width: 70%;
    margin: 0 auto;
    padding-top: 5rem;
    text-align: center;
    padding-bottom: 6rem;
  }
`;

export const StyledCardsTab = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  gap: 4rem;
`;

export const StyledCardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border: 0.5px solid grey;
  padding: 3rem;
`;

export const StyledCardDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 15%;
    max-height: 60%;
    border-radius: 50%;
  }

  div {
    margin-left: 1rem;
    h6 {
      margin: 0;
    }

    p {
      margin: 0;
      color: var(--secondary-color);
    }
  }
`;

export const StyledTestimonialFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 5rem;
  padding-right: 5rem;
`;
