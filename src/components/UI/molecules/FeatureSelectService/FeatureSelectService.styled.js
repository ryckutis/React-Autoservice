import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: #f5f5f5;
  height: 44rem;
`;

export const StyledSelectedService = styled.div`
  width: 28rem;
  height: 33rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  img {
    width: 26rem;
    padding: 1rem;
    padding-top: 2rem;
  }
`;

export const StyledHeading = styled.h3`
  margin: 0;
  padding-left: 1rem;
`;

export const StyledParagraph = styled.p`
  padding-left: 1rem;
  color: #232536;
  opacity: 0.6;
`;

export const StyledLink = styled.a`
  padding-left: 1rem;
  :hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

export const StyledServices = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 1.5rem;
  max-height: 33rem;
`;

export const StyledServiceCard = styled.div`
  background-color: var(--white-color);

  width: 15rem;
  height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--orange-color);
    color: white;
  }

  :hover a {
    color: var(--white-color);
  }
  span {
    font-size: 4rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
