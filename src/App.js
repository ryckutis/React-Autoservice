import './App.css';
import NavBar from './components/UI/atoms/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './components/UI/molecules/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="/about" />
        <Route path="/services">
          <Route path="diagnostics" />
          <Route path="batteries" />
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
