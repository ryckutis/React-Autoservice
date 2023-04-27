import React from "react";
import devon from "../../../../assets/devon.png";
import jevena from "../../../../assets/jevena.png";
import luisa from "../../../../assets/luisa.png";
import paul from "../../../../assets/paul.png";
import {
  StyledWrapper,
  StylesTeamHeader,
  StyledGridDiv,
  StylesTeamcard,
} from "../MeetTeam/MeetTeam.styled";

export default function MeetTeam() {
  return (
    <StyledWrapper>
      <StylesTeamHeader>
        <h1>Meet our Team</h1>
      </StylesTeamHeader>
      <StyledGridDiv>
        <StylesTeamcard>
          <img src={jevena} alt="Javena" />
          <div>
            <h6>Javena Melo</h6>
            <p>Founder, Director</p>
          </div>
        </StylesTeamcard>
        <StylesTeamcard>
          <img src={paul} alt="Paul" />
          <div>
            <h6>Paul Honson</h6>
            <p>Head Technician</p>
          </div>
        </StylesTeamcard>
        <StylesTeamcard>
          <img src={devon} alt="Devon" />
          <div>
            <h6>Devon Lane</h6>
            <p>Technician</p>
          </div>
        </StylesTeamcard>
        <StylesTeamcard>
          <img src={devon} alt="Jalen" />
          <div>
            <h6>Jalen Davies</h6>
            <p>Marketing Manager</p>
          </div>
        </StylesTeamcard>
        <StylesTeamcard>
          <img src={luisa} alt="Kylee" />
          <div>
            <h6>Kylee Danford</h6>
            <p>Sales Manager</p>
          </div>
        </StylesTeamcard>
        <StylesTeamcard>
          <img src={luisa} alt="Luisa" />
          <div>
            <h6>Luisa Wilson</h6>
            <p>Support Assistant</p>
          </div>
        </StylesTeamcard>
      </StyledGridDiv>
    </StyledWrapper>
  );
}
