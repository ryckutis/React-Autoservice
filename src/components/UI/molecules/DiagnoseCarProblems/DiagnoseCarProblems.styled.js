import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMainDiv = styled.div`
  background: var(--white-color);
  width: 100%;
`;

export const StyledMainInfoDiv = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  padding: 4% 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPictureDiv = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3%;
  margin-right: 5%;
  align-items: center;

  img {
    width: 50%;
    height: 100%;
    margin-right: 0;
  }
`;

export const StyledDiagnoseDiv = styled.div`
  width: 45%;
`;

export const StyledDiagnoseHeading = styled.h3`
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: var(--primary-color);
  padding: 0;
  margin: 0px 0 20px 0;
  width: 100%;
  text-align: left;
`;

export const StyledDiagnosePar = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
  color: var(--primary-color);
  opacity: 0.6;
  width: 100%;
  text-align: left;
  margin: 30px 0;
`;

export const StyledLink = styled(Link)`
  background-color: var(--orange-color);
  border: none;
  text-decoration: none;
  color: var(--white-color);
  padding: 15px 25px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
