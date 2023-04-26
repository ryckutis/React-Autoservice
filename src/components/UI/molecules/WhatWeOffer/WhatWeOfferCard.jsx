import React from "react";
import { Link } from "react-router-dom";
import { StyledWhatWeOfferCard } from "./WhatWeOffer.styled";

export default function WhatWeOfferCard({ icon, path, name }) {
  return (
    <StyledWhatWeOfferCard>
      <span>{icon}</span>
      <Link to={path}>{name}</Link>
    </StyledWhatWeOfferCard>
  );
}
