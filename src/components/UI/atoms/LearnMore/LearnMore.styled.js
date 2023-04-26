import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  margin: 0 auto;
`;

export const StyledSection = styled.section`
  margin-top: 50px;
  padding: 0px 50px;
  width: 30%;
`;

export const StyledTitle = styled.h1`
  font-size: 2.8rem;
`;

export const StyledPar = styled.p`
  font-size: 0.9rem;
  width: 84%;
  font-weight: 400;
  color: grey;
  line-height: 1.5rem;
`;

export const StyledBeforePar = styled(StyledPar)`
  border-left: 1px dashed red;
  padding-left: 45px;
  margin-left: -44px;
`;

export const StyledButton = styled.button`
  background-color: #ff8a47;
  border: none;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
`;

export const StyledNumber = styled.h3`
  padding: 13px;
  height: 0%;
  background-color: #5f54ff;
  border-radius: 60%;
  color: white;
  margin-right: 20px;
`;

export const StyledName = styled.h2`
  margin-top: 30px;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  width: 90%;
`;
