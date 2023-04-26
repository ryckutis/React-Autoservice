import React from 'react';
import NavBar from '../../atoms/NavBar/NavBar';
import ServiceForm from '../../molecules/ServiceForm/ServiceForm';
import LearnMore from '../../molecules/LearnMore/LearnMore';
import WhatWeOffer from '../../molecules/WhatWeOffer/WhatWeOffer';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import ProfessionalExperience from '../../atoms/ProfessionalExperience/ProfessionalExperience';
import BrandsWeServe from '../../atoms/BrandsWeServe/BrandsWeServe';
import Testimonials from '../../molecules/Testimonials/Testimonials';

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <ServiceForm />
      <LearnMore />
      <WhatWeOffer />
      <ContactUs />
      <ProfessionalExperience />
      <BrandsWeServe />
      <Testimonials />
    </div>
  );
}
