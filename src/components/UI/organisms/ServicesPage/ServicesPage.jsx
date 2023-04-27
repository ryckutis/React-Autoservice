import React from 'react';
import OurServices from '../../molecules/OurServices/OurServices';
import FeatureSelectService from '../../molecules/FeatureSelectService/FeatureSelectService';
import HowWeWork from '../../molecules/HowWeWork/HowWeWork';
import DiagnoseCarProblems from '../../molecules/DiagnoseCarProblems/DiagnoseCarProblems';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import FooterSection from '../../molecules/FooterSection/FooterSection';
import Porsche from '../../../../assets/porsche-fix.png';

export default function ServicesPage() {
  return (
    <div>
      <OurServices imgSrc={Porsche} hText="Our Services" />
      <FeatureSelectService />
      <HowWeWork />
      <DiagnoseCarProblems />
      <ContactUs />
      <FooterSection />
    </div>
  );
}
