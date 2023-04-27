import React from 'react';
import SingleServiceBody from '../../molecules/SingleServiceBody/SingleServiceBody';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import FooterSection from '../../molecules/FooterSection/FooterSection';

export default function SingleServicePage({ service }) {
  return (
    <div>
      <SingleServiceBody service={service} />
      <ContactUs />
      <FooterSection />
    </div>
  );
}

// <Route path="diagnostics" element={<SingleServicePage service="Auto Diagnostics" />} />
// <Route path="engine-repair" element={<SingleServicePage service="Engine Repair" />} />
// <Route path="wheel-repair" element={<SingleServicePage service="Wheel Repair" />} />
// <Route path="oil-filter" element={<SingleServicePage service="Oil Filter Change" />} />
// <Route path="body-work" element={<SingleServicePage service="Body Work" />} />
// <Route path="batteries" element={<SingleServicePage service="Batteries" />} />
// <Route path="insurance-claim" element={<SingleServicePage service="Insurance Claim" />} />
// <Route path="custom-service" element={<SingleServicePage service="Custom Service" />} />
