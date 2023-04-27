import React from 'react';
import { MdElectricCar } from 'react-icons/md';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';
import { GiCarWheel, GiGearHammer } from 'react-icons/gi';
import { RiOilFill, RiShieldCheckFill } from 'react-icons/ri';
import { FaCarBattery } from 'react-icons/fa';
import OtherServicesCard from './OtherServicesCard';
import { StyledOtherServicesDiv } from './OtherServices.styled';

export default function OtherServices() {
  return (
    <StyledOtherServicesDiv>
      <h5>Other Services</h5>
      <OtherServicesCard
        path={'/services/diagnostics'}
        name={'Diagnostics'}
        icon={<MdElectricCar />}
      />
      <OtherServicesCard
        path={'/services/engine-repair'}
        name={'Engine Repair'}
        icon={<GoGear />}
      />
      <OtherServicesCard
        path={'/services/wheel-repair'}
        name={'Wheel Repair'}
        icon={<GiCarWheel />}
      />
      <OtherServicesCard path={'/services/oil-filter'} name={'Oil Filter'} icon={<RiOilFill />} />
      <OtherServicesCard
        path={'/services/body-work'}
        name={'Body Work'}
        icon={<BsFillCarFrontFill />}
      />
      <OtherServicesCard path={'/services/batteries'} name={'Batteries'} icon={<FaCarBattery />} />
      <OtherServicesCard
        path={'/services/insurance-claim'}
        name={'Insurance Claim'}
        icon={<RiShieldCheckFill />}
      />
      <OtherServicesCard
        path={'/services/custom-service'}
        name={'Custom Service'}
        icon={<GiGearHammer />}
      />
    </StyledOtherServicesDiv>
  );
}
