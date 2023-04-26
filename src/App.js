import './App.css';
import NavBar from './components/UI/atoms/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import BookAService from './components/UI/atoms/BookAService/BookAService';

function App() {
  return (
    <div>
      {/* <NavBar />
      <Routes>
        <Route path="/" />
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
      </Routes> */}
      <BookAService />
    </div>
  );
}

export default App;
