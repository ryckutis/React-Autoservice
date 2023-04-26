import styled from 'styled-components';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { BsWrenchAdjustableCircle } from 'react-icons/bs';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  display: flex;
  background-color: rgba(226, 230, 233, 1);
  margin: 0 auto;
  padding-bottom: 5rem;
`;

export const StyledInput = styled.input`
  border: 1px solid white;
  padding-left: 2rem;
  width: 80%;
  height: 2.8rem;
  border-radius: 2px;
  margin: 1.5px;
`;

export const StyledPar = styled.p`
  width: 50%;
  font-size: 16px;
  line-height: 28px;
  opacity: 60%;
  margin-left: 5rem;
  margin-top: 0;
`;
export const StyledH6 = styled.h6`
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

export const StyledDiv = styled.div`
  width: 35%;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  color: var(--white-color);
  background: #ff6433;
  border-radius: 12px;
  padding: 16px 40px;
  margin-top: 1rem;

  :hover {
    cursor: pointer;
  }
`;

export const StyledHEadingOne = styled.h2`
  font-weight: 800;
  margin-left: 5rem;
`;
export const StyledHeadingTwo = styled.h3`
  font-weight: 600;
  margin-right: 5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding-left: 5rem;
  padding-bottom: 5rem;
`;
