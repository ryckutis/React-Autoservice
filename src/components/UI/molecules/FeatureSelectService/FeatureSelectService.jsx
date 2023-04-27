import React from 'react';
import Wheel from '../../../../assets/wheel.png';
import {
  StyledMainDiv,
  StyledSelectedService,
  StyledLink,
  StyledServices,
  StyledHeading,
  StyledParagraph,
} from './FeatureSelectService.styled.js';
import ServiceCard from './ServiceCard';
import { MdElectricCar } from 'react-icons/md';
import { GoGear } from 'react-icons/go';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { FaCarBattery } from 'react-icons/fa';

export default function FeatureSelectService() {
  return (
    <StyledMainDiv>
      <StyledSelectedService>
        <img src={Wheel} alt='Front of the car and its wheel' />
        <StyledHeading>Auto Diagnostics</StyledHeading>
        <StyledParagraph>
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic.
          Through True Rich Attended does no end it his mother.
        </StyledParagraph>
        <StyledLink>See service details →</StyledLink>
      </StyledSelectedService>
      <StyledServices>
        <ServiceCard
          path={'/services/diagnostics'}
          name={'Diagnostics'}
          icon={<MdElectricCar />}
        />
        <ServiceCard
          path={'/services/enginerepair'}
          name={'Engine Repair'}
          icon={<GoGear />}
        />
        <ServiceCard
          path={'/services/bodywork'}
          name={'Body Work'}
          icon={<BsFillCarFrontFill />}
        />
        <ServiceCard
          path={'/services/batteries'}
          name={'Batteries'}
          icon={<FaCarBattery />}
        />
        <ServiceCard
          path={'/services/carwash'}
          name={'Car wash'}
          icon={<MdElectricCar />}
        />
        <ServiceCard
          path={'/services/acrepair'}
          name={'AC Repair'}
          icon={<GoGear />}
        />
      </StyledServices>
    </StyledMainDiv>
  );
}
