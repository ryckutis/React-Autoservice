import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  margin: 5rem auto;
`;

export const StyledSection = styled.section`
  padding: 0px 50px;
  width: 40%;
  margin: 0 auto;
  margin-top: 50px;
  height: 100%;
`;

export const StyledImgSection = styled.section`
  ${StyledSection};
  height: 100%;
  padding-bottom: 1rem;
  margin-top: 7rem;
  img {
    width: 120%;
  }
`;

export const StyledPar = styled.p`
  width: 84%;
  font-weight: 400;
  color: grey;
  line-height: 1.5rem;
`;

export const StyledNumber = styled.h4`
  width: 3rem;
  line-height: 3rem;
  padding: 1rem;
  background-color: var(--purple-color);
  border-radius: 50%;
  color: var(--white-color);
  margin-right: 2rem;
`;

export const StyledName = styled.h5`
  margin-bottom: 1rem;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  width: 90%;
`;
