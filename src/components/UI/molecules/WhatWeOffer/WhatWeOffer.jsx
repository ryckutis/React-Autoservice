import React from "react";
import { MdElectricCar } from "react-icons/md";
import { BsFillCarFrontFill } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { GiCarWheel, GiGearHammer } from "react-icons/gi";
import { RiOilFill, RiShieldCheckFill } from "react-icons/ri";
import { FaCarBattery } from "react-icons/fa";
import WhatWeOfferCard from "./WhatWeOfferCard";

import {
  StyledBackgroundDiv,
  StyledAnchorDiv,
  StyledHeadingDiv,
  StyledMainDiv,
  StyledLink,
  StyledHiArrowLongRight,
} from "./WhatWeOffer.styled";

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
            path={"/services/diagnostics"}
            name={"Diagnostics"}
            icon={<MdElectricCar />}
          />
          <WhatWeOfferCard
            path={"/services/enginerepair"}
            name={"Engine Repair"}
            icon={<GoGear />}
          />
          <WhatWeOfferCard
            path={"/services/wheelrepair"}
            name={"Wheel Repair"}
            icon={<GiCarWheel />}
          />
          <WhatWeOfferCard
            path={"/services/oilfilter"}
            name={"Oil Filter"}
            icon={<RiOilFill />}
          />
          <WhatWeOfferCard
            path={"/services/bodywork"}
            name={"Body Work"}
            icon={<BsFillCarFrontFill />}
          />
          <WhatWeOfferCard
            path={"/services/batteries"}
            name={"Batteries"}
            icon={<FaCarBattery />}
          />
          <WhatWeOfferCard
            path={"/services/insuranceclaim"}
            name={"Insurance Claim"}
            icon={<RiShieldCheckFill />}
          />
          <WhatWeOfferCard
            path={"/services/customservice"}
            name={"Custom Service"}
            icon={<GiGearHammer />}
          />
        </StyledAnchorDiv>
        <StyledLink to='/services'>
          Learn about services<span>{<StyledHiArrowLongRight />}</span>
        </StyledLink>
      </StyledMainDiv>
    </StyledBackgroundDiv>
  );
}
