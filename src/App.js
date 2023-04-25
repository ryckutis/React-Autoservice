import "./App.css";
import NavBar from "./components/UI/atoms/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Testimonials from "./components/UI/atoms/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <NavBar />
      <Testimonials />
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
      </Routes>
    </div>
  );
}

export default App;
