import styled from 'styled-components';

import { AiOutlineDollar } from 'react-icons/ai';
import { GoGear } from 'react-icons/go';
import { FaUserTie } from 'react-icons/fa';

export const StyledBackgroundDiv = styled.div`
  background-color: #f2f2f2;
  padding: 1rem 0 4rem 0;
`;

export const StyledMainDiv = styled.div`
  width: 75%;
  margin: 5rem auto;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  margin: 0 auto;
  width: 60%;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  margin-top: 5rem;
`;

export const StyledCardDiv = styled.div`
  text-align: center;
  width: 50%;
  padding: 2rem;
  background-color: white;
  padding: 7rem 1rem;
`;

export const StyledPar = styled.p`
  color: grey;
  font-weight: 600;
  width: 63%;
  margin: 0 auto;
  line-height: 1.8rem;
`;

export const StyledH = styled.h5`
  margin: 1rem auto;
`;

const iconsStyling = `
font-size: 4rem;
  background: #ffdace;
  border-radius: 50%;
  padding: 1rem;
`;

export const StyledGoGear = styled(GoGear)`
  ${iconsStyling}
`;

export const StyledUser = styled(FaUserTie)`
  ${iconsStyling}
`;

export const StyledAiOutlineDollar = styled(AiOutlineDollar, GoGear)`
  ${iconsStyling}
`;
