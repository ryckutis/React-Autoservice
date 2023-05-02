import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

export const StyledBackgroundDiv = styled.div`
  background-color: #f2f2f2;
  padding: 0 0 4rem 0;
`;

export const StyledMainDiv = styled.div`
  width: var(--primary-width);
  margin: 0 auto;
`;

export const StyledWhatWeOfferCard = styled.div`
  :hover {
    background-color: #ff6433;
    color: white;
  }
  span {
    font-size: 32px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export const StyledHeadingDiv = styled.div`
  text-align: center;
  padding: 6rem 0 0 0;

  h6 {
    font-weight: 500;
    margin: 0 auto 10px;
  }

  h2 {
    margin: 10px auto;
    width: 75%;
  }
`;

export const StyledAnchorDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 10rem;
    text-decoration: none;
    color: black;
    font-weight: 500;
    background-color: white;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  margin: 3rem 0 0 0;
  justify-content: end;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: var(--par-medium);
`;

export const StyledHiArrowLongRight = styled(HiArrowLongRight)`
  font-size: 25px;
  padding-left: 0.5rem;
`;
