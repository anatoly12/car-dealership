import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import AboutUs from "./component/aboutUs";
import ContactUs from "./component/contactUs";
import Register from "./component/register";
import Login from "./component/login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;
