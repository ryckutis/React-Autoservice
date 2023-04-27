import React from 'react';
import OurServices from '../../molecules/OurServices/OurServices';
import ExpertService from '../../molecules/ExpertService/ExpertService';
import Porsche from '../../../../assets/porsche-fix.png';
import ThreeServices from '../../molecules/ThreeServices/ThreeServices';
import ValuedCustomers from '../../atoms/ValuedCustomers/ValuedCustomers';
import ProfessionalExperience from '../../atoms/ProfessionalExperience/ProfessionalExperience';
import MeetTeam from '../../molecules/MeetTeam/MeetTeam';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import FooterSection from '../../molecules/FooterSection/FooterSection';

export default function AboutPage() {
  return (
    <div>
      <OurServices imgSrc={Porsche} hText="About us" />
      <ExpertService />
      <ThreeServices />
      <ValuedCustomers />
      <ProfessionalExperience />
      <MeetTeam />
      <ContactUs />
      <FooterSection />
    </div>
  );
}
