import React from "react";
import {
  StyledMainDiv,
  StyledMainInfoDiv,
  StyledHowWeWorkDiv,
  StyledHowWeWorkHeading,
  StyledCheckPar,
  StyledIconCheck,
  StyledIconAndTitleDiv,
  StyledIconAndTitleLittleDiv,
  StyledPictureDiv,
} from "./HowWeWork.styled";
import vw from "../../../../assets/vw.png";
import repair from "../../../../assets/repair.png";

export default function HowWeWork() {
  return (
    <div>
      <StyledMainDiv>
        <StyledMainInfoDiv>
          <StyledHowWeWorkDiv>
            <StyledHowWeWorkHeading>How we work and the process we follow</StyledHowWeWorkHeading>
            <StyledIconAndTitleDiv>
              <StyledIconAndTitleLittleDiv>
                <StyledIconCheck />
                <StyledCheckPar>
                  Through True Rich Attended does no end it his mother since
                </StyledCheckPar>
              </StyledIconAndTitleLittleDiv>
              <StyledIconAndTitleLittleDiv>
                <StyledIconCheck />
                <StyledCheckPar>
                  Attended does no end it his mother since real had half every
                </StyledCheckPar>
              </StyledIconAndTitleLittleDiv>
              <StyledIconAndTitleLittleDiv>
                <StyledIconCheck />
                <StyledCheckPar>
                  Since real had half every him case in packages enquire we up
                </StyledCheckPar>
              </StyledIconAndTitleLittleDiv>
            </StyledIconAndTitleDiv>
          </StyledHowWeWorkDiv>
          <StyledPictureDiv>
            <img src={vw} alt="Volkswagen" />
            <img src={repair} alt="Car is being repaired" />
          </StyledPictureDiv>
        </StyledMainInfoDiv>
      </StyledMainDiv>
    </div>
  );
}
