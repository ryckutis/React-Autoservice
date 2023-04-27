import React from 'react';
import ServiceCar from '../../../../assets/service-car.png';
import { StyledDiv, StyledPar } from './ServiceInfo.styled';

export default function ServiceInfo() {
  return (
    <StyledDiv>
      <img src={ServiceCar} alt="A car" />
      <h4>The warning lights on your dashboard are the most obvious starting point.</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque hic quia, minus magni
        id modi quod, nobis libero accusantium dolores, sequi natus iure? Architecto rerum at
        perferendis accusamus quisquam, minus aut iure qui aspernatur omnis aliquid libero
        provident? Expedita, commodi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae suscipit quae tempora at
        ipsam autem mollitia nihil provident. Numquam sunt accusamus vero aspernatur facere sint
        deserunt repudiandae ut culpa voluptatem eveniet velit tempore nulla voluptatum officia
        maiores quam alias, fuga error, quae delectus quos vel. Ab iste tenetur veniam ipsam soluta
        corporis incidunt facilis quibusdam? Quasi cupiditate omnis odit saepe quisquam ut labore
        sequi, reprehenderit eius accusamus assumenda nostrum animi aliquid doloribus optio cumque?
        Suscipit similique iusto ipsa id maiores!
      </p>
      <h5>Delaying a diagnosis and repair could lead to even bigger problems down the road.</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui
        bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque varius
        diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar cursus
        nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo tincidunt a. Donec at
        congue lectus. Nulla facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
        placerat. Etiam ornare nibh vel dui egestas, eu posuere metus convallis.
      </p>
      <StyledPar>
        Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum
        libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus
        vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante.
      </StyledPar>
    </StyledDiv>
  );
}
