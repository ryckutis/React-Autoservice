import React from 'react';
import WhiteCar from '../../../../App/white-car-front.png';
import CarBattery from '../../../../App/car-battery.png';

export default function ContactUs() {
  return (
    <div>
      <div>
        <img src={WhiteCar} alt="The front of a white car" />
      </div>
      <img src={CarBattery} alt="A wired car battery" />
    </div>
  );
}
