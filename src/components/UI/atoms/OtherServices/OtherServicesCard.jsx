import React from 'react';
import { StyledOtherServicesCard } from './OtherServices.styled';

export default function OtherServicesCard({ icon, path, name }) {
  return (
    <StyledOtherServicesCard to={path}>
      <span>{icon}</span>
      <h6> {name}</h6>
    </StyledOtherServicesCard>
  );
}
