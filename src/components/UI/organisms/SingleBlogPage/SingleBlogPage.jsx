import React from 'react';
import BlogSingle from '../../molecules/BlogSingle/BlogSingle';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import FooterSection from '../../molecules/FooterSection/FooterSection';

export default function SingleBlogPage() {
  return (
    <div>
      <BlogSingle />
      <ContactUs />
      <FooterSection />
    </div>
  );
}
