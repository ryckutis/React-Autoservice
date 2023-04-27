import React from 'react';
import { Wrapper } from './GridBlogs.styled';

import Tires from '../../../../assets/Tires.png';
import Speed from '../../../../assets/Speedometer.png';
import Mercedess from '../../../../assets/Mercedess.png';
import ToolsPic from '../../../../assets/Tools.png';
import CarInsideWhite from '../../../../assets/CarInside.png';
import CarInsideBlack from '../../../../assets/CarInsideBlack.png';
import GridBlogsCard from './GridBlogsCard';

export default function GridBlogs() {
  return (
    <Wrapper>
      <GridBlogsCard image={Speed} link="/blog/blog1" />
      <GridBlogsCard image={CarInsideBlack} link="/blog/blog1" />
      <GridBlogsCard image={ToolsPic} link="/blog/blog1" />
      <GridBlogsCard image={Tires} link="/blog/blog2" />
      <GridBlogsCard image={CarInsideWhite} link="/blog/blog2" />
      <GridBlogsCard image={Mercedess} link="/blog/blog2" />
    </Wrapper>
  );
}
