import React from 'react';
import QuestionBlog from '../../molecules/QuestionBlog/QuestionBlog';
import GridBlogs from '../../molecules/GridBlogs/GridBlogs';
import ContactUs from '../../molecules/ContactUs/ContactUs';
import FooterSection from '../../molecules/FooterSection/FooterSection';

export default function BlogPage() {
  return (
    <div>
      <QuestionBlog />
      <GridBlogs />
      <ContactUs />
      <FooterSection />
    </div>
  );
}
