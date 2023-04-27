import React from 'react';
import { MdElectricCar } from 'react-icons/md';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';
import { GiCarWheel, GiGearHammer } from 'react-icons/gi';
import { RiOilFill, RiShieldCheckFill } from 'react-icons/ri';
import { FaCarBattery } from 'react-icons/fa';
import WhatWeOfferCard from './WhatWeOfferCard';

import {
  StyledBackgroundDiv,
  StyledAnchorDiv,
  StyledHeadingDiv,
  StyledMainDiv,
  StyledLink,
  StyledHiArrowLongRight,
} from './WhatWeOffer.styled';

export default function WhatWeOffer() {
  return (
    <StyledBackgroundDiv>
      <StyledMainDiv>
        <StyledHeadingDiv>
          <h6>What we Offer</h6>
          <h2>We offer full service auto repair & maintenance</h2>
        </StyledHeadingDiv>
        <StyledAnchorDiv>
          <WhatWeOfferCard
            path={'/services/diagnostics'}
            name={'Diagnostics'}
            icon={<MdElectricCar />}
          />
          <WhatWeOfferCard
            path={'/services/engine-repair'}
            name={'Engine Repair'}
            icon={<GoGear />}
          />
          <WhatWeOfferCard
            path={'/services/wheel-repair'}
            name={'Wheel Repair'}
            icon={<GiCarWheel />}
          />
          <WhatWeOfferCard path={'/services/oil-filter'} name={'Oil Filter'} icon={<RiOilFill />} />
          <WhatWeOfferCard
            path={'/services/body-work'}
            name={'Body Work'}
            icon={<BsFillCarFrontFill />}
          />
          <WhatWeOfferCard
            path={'/services/batteries'}
            name={'Batteries'}
            icon={<FaCarBattery />}
          />
          <WhatWeOfferCard
            path={'/services/insurance-claim'}
            name={'Insurance Claim'}
            icon={<RiShieldCheckFill />}
          />
          <WhatWeOfferCard
            path={'/services/custom-service'}
            name={'Custom Service'}
            icon={<GiGearHammer />}
          />
        </StyledAnchorDiv>
        <StyledLink to="/services">
          Learn about services<span>{<StyledHiArrowLongRight />}</span>
        </StyledLink>
      </StyledMainDiv>
    </StyledBackgroundDiv>
  );
}
