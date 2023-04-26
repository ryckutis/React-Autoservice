import React from 'react';
import SingleServiceBody from '../../molecules/SingleServiceBody/SingleServiceBody';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import FooterSection from '../../molecules/FooterSection/FooterSection';

export default function SingleServicePage() {
  return (
    <div>
      <SingleServiceBody />
      <ContactUs />
      <FooterSection />
    </div>
  );
}
