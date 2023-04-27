import './App.css';
import NavBar from './components/UI/atoms/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/UI/organisms/HomePage/HomePage';
import SingleServicePage from './components/UI/organisms/SingleServicePage/SingleServicePage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" />
        <Route path="/services">
          <Route path="diagnostics" element={<SingleServicePage service="Auto Diagnostics" />} />
          <Route path="engine-repair" element={<SingleServicePage service="Engine Repair" />} />
          <Route path="wheel-repair" element={<SingleServicePage service="Wheel Repair" />} />
          <Route path="oil-filter" element={<SingleServicePage service="Oil Filter Change" />} />
          <Route path="body-work" element={<SingleServicePage service="Body Work" />} />
          <Route path="batteries" element={<SingleServicePage service="Batteries" />} />
          <Route path="insurance-claim" element={<SingleServicePage service="Insurance Claim" />} />
          <Route path="custom-service" element={<SingleServicePage service="Custom Service" />} />
        </Route>
        <Route path="/blog">
          <Route path="blog1" />
          <Route path="blog2" />
        </Route>
        <Route path="/contact" />
      </Routes>
    </div>
  );
}

export default App;
