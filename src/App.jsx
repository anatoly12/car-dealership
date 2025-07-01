import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import AboutUs from "./component/aboutUs";
import ContactUs from "./component/contactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
