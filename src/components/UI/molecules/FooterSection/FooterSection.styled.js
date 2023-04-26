import styled from 'styled-components';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';

export const StyledMainDiv = styled.div`
  background: var(--primary-color);
  opacity: 0.98;
  width: 100%;
`;

export const StyledMainInfoDiv = styled.div`
  width: 75%;
  height: 549px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledGetInTouchDiv = styled.div`
  width: 45%;
  height: 100%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledGetInTouchHeading = styled.h3`
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.03em;
  color: var(--white-color);
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;
`;

export const StyledIconsDiv = styled.div`
  color: var(--white-color);
`;

export const StyledIconsFacebook = styled(IoLogoFacebook)`
  padding-right: 15px;
  margin-top: 50px;
  font-size: 20px;
`;

export const StyledIconsTwitter = styled(IoLogoTwitter)`
  padding-right: 15px;
  font-size: 20px;
`;

export const StyledIconsInstagram = styled(IoLogoInstagram)`
  padding-right: 15px;
  font-size: 20px;
`;

export const StyledIconsLinkedIn = styled(IoLogoLinkedin)`
  font-size: 20px;
`;

export const StyledMainContactDiv = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledContactDiv = styled.div`
  padding-bottom: 25px;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const StyledContactPar = styled.h6`
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
  color: var(--white-color);
  opacity: 0.6;
  margin: 0;
`;

export const StyledContactHeading = styled.h5`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.03em;
  color: var(--white-color);
  margin: 0;
`;
