import React from 'react';
import QuestionBlog from '../../molecules/QuestionBlog/QuestionBlog';
import GridBlogs from '../../molecules/GridBlogs/GridBlogs';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import FooterSection from '../../molecules/FooterSection/FooterSection';
import OurBlog from '../../molecules/OurBlog/OurBlog';

export default function BlogPage() {
  return (
    <div>
      <OurBlog />
      <QuestionBlog />
      <GridBlogs />
      <ContactUs />
      <FooterSection />
    </div>
  );
}
