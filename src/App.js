import "./App.css";
import NavBar from "./components/UI/atoms/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import WhatWeOffer from "./components/UI/molecules/WhatWeOffer/WhatWeOffer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<WhatWeOffer />} />
        <Route path='/about' />
        <Route path='/services'>
          <Route path='diagnostics' />
          <Route path='batteries' />
        </Route>
        <Route path='/blog'>
          <Route path='blog1' />
          <Route path='blog2' />
        </Route>
        <Route path='/contact' />
      </Routes>
    </div>
  );
}

export default App;
