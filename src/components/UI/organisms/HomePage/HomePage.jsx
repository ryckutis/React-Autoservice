import React from 'react';
import BookAService from '../../molecules/BookAService/BookAService';
import ServiceForm from '../../molecules/ServiceForm/ServiceForm';
import LearnMore from '../../molecules/LearnMore/LearnMore';
import WhatWeOffer from '../../molecules/WhatWeOffer/WhatWeOffer';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import ProfessionalExperience from '../../atoms/ProfessionalExperience/ProfessionalExperience';
import BrandsWeServe from '../../atoms/BrandsWeServe/BrandsWeServe';
import Testimonials from '../../molecules/Testimonials/Testimonials';
import FooterSection from '../../molecules/FooterSection/FooterSection';

export default function HomePage() {
  return (
    <div>
      <BookAService />
      <ServiceForm />
      <LearnMore />
      <WhatWeOffer />
      <ContactUs />
      <ProfessionalExperience />
      <BrandsWeServe />
      <Testimonials />
      <FooterSection />
    </div>
  );
}
