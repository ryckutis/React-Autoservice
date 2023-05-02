import './App.css';
import NavBar from './components/UI/atoms/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/UI/organisms/HomePage/HomePage';
import SingleServicePage from './components/UI/organisms/SingleServicePage/SingleServicePage';
import ServicesPage from './components/UI/organisms/ServicesPage/ServicesPage';
import ContactPage from './components/UI/organisms/ContactPage/ContactPage';
import BlogPage from './components/UI/organisms/BlogPage/BlogPage';
import SingleBlogPage from './components/UI/organisms/SingleBlogPage/SingleBlogPage';
import AboutPage from './components/UI/organisms/AboutPage/AboutPage';
import ScrollToTop from './components/Functions/ScrollToTop';

function App() {
  return (
    <div>
      <NavBar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/diagnostics" element={<SingleServicePage service="Auto Diagnostics" />} />
          <Route path="/services/engine-repair" element={<SingleServicePage service="Engine Repair" />} />
          <Route path="/services/wheel-repair" element={<SingleServicePage service="Wheel Repair" />} />
          <Route path="/services/oil-filter" element={<SingleServicePage service="Oil Filter Change" />} />
          <Route path="/services/body-work" element={<SingleServicePage service="Body Work" />} />
          <Route path="/services/batteries" element={<SingleServicePage service="Batteries" />} />
          <Route path="/services/insurance-claim" element={<SingleServicePage service="Insurance Claim" />} />
          <Route path="/services/custom-service" element={<SingleServicePage service="Custom Service" />} />
          <Route path="/services/car-wash" element={<SingleServicePage service="Car Wash" />} />
          <Route path="/services/ac-repair" element={<SingleServicePage service="AC Repair" />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/blog1" element={<SingleBlogPage />} />
          <Route path="/blog/blog2" element={<SingleBlogPage />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
