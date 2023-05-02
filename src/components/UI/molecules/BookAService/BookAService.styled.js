import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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

export const StyledLinkWrap = styled.div`
  margin: 3rem 0;
`;

export const StyledLink = styled(Link)`
  color: var(--white-color);
  background: var(--orange-color);
  border: 1px solid var(--orange-color);
  border-radius: 12px;
  padding: 16px 40px;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;
export const StyledDivOne = styled.div`
  width: 50%;
`;
export const StyledDivTwo = styled.div`
  width: 50%;
`;

const StylePar = `
font-size: 16px;
line-height: 28px;
margin-left: 1rem;
margin-top: 0;
display: inline;
`;

export const StyledPar = styled.p`
  ${StylePar}
  opacity: 60%;
`;

export const StyledPar2 = styled.p`
  ${StylePar}
  color: black;
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
  width: 75%;
  height: 100%;
`;
