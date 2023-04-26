import React from 'react';
import car from '../../../../assets/whiteCar.png';
import road from '../../../../assets/road.png';
import {
  Wrapper,
  StyledHeader,
  StyledPar,
  StyledImage,
  StyledHeader4,
  StyledBiggerImage,
  StyledParDiv,
  StyledPar2,
} from './BlogSingle.styled';

export default function BlogSingle() {
  return (
    <Wrapper>
      <StyledPar>Posted on October 6th 2021</StyledPar>
      <StyledHeader>
        Should I Buy a New Car or Lease a New Car in 2021?
      </StyledHeader>
      <br />
      <StyledPar>
        We provide a full range of front end mechanical repairs for all makes
        and models of cars, no matter the cause. This includes, We provide a
        full range of front end mechanical Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </StyledPar>
      <StyledBiggerImage src={car} alt='white car driving' />
      <StyledHeader4>This is a blog post headline</StyledHeader4>
      <br />
      <StyledPar>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sequi
        asperiores fugit assumenda quis nostrum commodi dolores id atque est
        voluptas ipsum, illum officiis dignissimos optio pariatur rerum, quaerat
        cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Omnis illo a libero fugit sequi! Vero voluptate eius itaque, quos
        doloremque quis, velit labore ad, pariatur minima laborum sit numquam
        libero! <br /> <br /> <br /> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ut placeat quo molestias soluta alias, obcaecati
        molestiae possimus necessitatibus repellendus nisi exercitationem
        voluptatem ab officia maxime praesentium culpa vero nulla consequuntur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsum?
        Eos voluptatibus culpa perspiciatis beatae ullam voluptates aperiam
        alias? Vel tempore numquam quaerat necessitatibus unde velit veniam
        ducimus! Culpa, porro? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Sed provident, ad deleniti eveniet reprehenderit
        repellat tempora soluta fuga repellendus vero quasi asperiores nihil
        dolores in consequuntur dolor dolorem iste. Repellendus.
      </StyledPar>
      <StyledImage src={road} alt='road' />
      <StyledHeader4>This is a small blog post headline</StyledHeader4>
      <br />
      <StyledPar>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
        auctor dictum eget a elit. Pellentesque varius diam risus, ut
        condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
        cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum
        justo tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus
        consectetur sapien accumsan lectus tincidunt placerat. Etiam ornare nibh
        vel dui egestas, eu posuere metus convallis.
      </StyledPar>
      <br />
      <StyledParDiv>
        <StyledPar2>
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante.
        </StyledPar2>
      </StyledParDiv>
      <br />
      <StyledPar>
        Ut non urna a odio condimentum dictum. Proin egestas erat a orci
        ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
        justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
        velit, ultricies eget enim vel, venenatis mollis ante. Maecenas sodales
        tristique quam. Suspendisse fringilla massa vel dolor ornare rhoncus.
        Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat
        nec enim ut finibus. Maecenas suscipit nibh eu neque egestas, non
        condimentum mi bibendum. Sed est eros, molestie consectetur auctor non,
        lobortis quis tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed
        suscipit ligula iaculis lorem sagittis tincidunt. Etiam pellentesque
        metus vel enim iaculis aliquam. Mauris at nisi sed elit gravida
        malesuada.
      </StyledPar>
    </Wrapper>
  );
}
