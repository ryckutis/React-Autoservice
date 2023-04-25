import './App.css';
import NavBar from './components/UI/atoms/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import LearnMoreBlock from './components/UI/atoms/LearnMoreBlock/LearnMoreBlock';

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
      <LearnMoreBlock />
    </div>
  );
}

export default App;
