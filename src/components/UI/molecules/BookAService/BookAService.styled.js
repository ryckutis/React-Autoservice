import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const Wrapper = styled.section`
  display: flex;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 2rem;
`;

export const StyledHEadingOne = styled.h1`
  font-weight: 800;
  font-size: 40px;
`;

export const StyledButton = styled.button`
  background: #ff6433;
  border-radius: 12px;
  padding: 16px 40px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
export const StyledDivOne = styled.div`
  width: 50%;
`;
export const StyledDivTwo = styled.div`
  width: 50%;
`;

export const StyledPar = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-size: 16px;
  line-height: 28px;
  opacity: 60%;
  margin-left: 1rem;
  margin-top: 0;
  display: inline;
`;

export const StyledPar2 = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-size: 16px;
  line-height: 28px;
  margin-left: 1rem;
  margin-top: 0;
  color: black;
  display: inline;
`;
export const StyledAiOutlineClockCircle = styled(AiOutlineClockCircle)`
  display: inline;
  font-size: 35px;
  color: rgba(226, 230, 233, 1);
`;

export const StyledBottomDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
