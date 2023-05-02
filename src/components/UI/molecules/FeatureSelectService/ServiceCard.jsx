import React from 'react';
import { Link } from 'react-router-dom';
import { StyledServiceCard } from './FeatureSelectService.styled';

export default function ServiceCard({ icon, path, name }) {
  return (
    <StyledServiceCard>
      <span>{icon}</span>
      <Link to={path}>{name}</Link>
    </StyledServiceCard>
  );
}
