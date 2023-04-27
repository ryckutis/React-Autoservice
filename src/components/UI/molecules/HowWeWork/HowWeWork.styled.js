import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";

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

export const StyledHowWeWorkDiv = styled.div`
  width: 45%;
  height: 100%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    width: 45%;
    height: 100%;
    margin-right: 0;
  }
`;

export const StyledHowWeWorkHeading = styled.h3`
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

export const StyledCheckPar = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.03em;
  color: var(--primary-color);
  margin-top: 10px;
`;

export const StyledIconCheck = styled(IoIosCheckmarkCircle)`
  font-size: 500%;
  color: var(--green-background);
  margin-right: 10px;
`;

export const StyledIconAndTitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledIconAndTitleLittleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
