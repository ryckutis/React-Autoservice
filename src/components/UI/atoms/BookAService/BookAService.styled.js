import styled from 'styled-components';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import { HiArrowLongRight } from 'react-icons/hi2';

export const Wrapper = styled.section`
  display: flex;
  background-color: rgba(226, 230, 233, 1);
  width: 75%;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

export const StyledInput = styled.input`
  width: 80%;
  height: 2.8rem;
  radius: 2px;
  margin 1.5px;
`;

export const StyledPar = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-size: 16px;
  line-height: 28px;
  opacity: 60%;
  margin-left: 5rem;
  margin-top: 0;
`;
export const StyledH3 = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 36px;
  display: inline;
`;
export const StyledAiFillDollarCircle = styled(AiFillDollarCircle)`
  margin-left: 5rem;
`;
export const StyledBsPersonCircle = styled(BsPersonCircle)`
  margin-left: 5rem;
`;
export const StyledBsWrenchAdjustableCircle = styled(BsWrenchAdjustableCircle)`
  margin-left: 5rem;
`;
export const StyledHiArrowLongRight = styled(HiArrowLongRight)`
  display: inline;
`;

export const StyledDivOne = styled.div`
width 50%
`;
export const StyledDivTwo = styled.div`
width 50%
`;

export const StyledButton = styled.button`
  background: #ff6433;
  border-radius: 12px;
  padding: 16px 40px;
  margin-top: 1rem;
`;

export const StyledHEadingOne = styled.h1`
  font-weight: 800;
  font-size: 40px;
  margin-left: 5rem;
`;
export const StyledHeadingTwo = styled.h1`
  font-weight: 500;
  font-size: 40px;
  margin-right: 5rem;
`;

export const StyledATag = styled.a`
  text-decoration: none;
  color: black;
  padding-left: 5rem;
  padding-bottom: 5rem;
`;
