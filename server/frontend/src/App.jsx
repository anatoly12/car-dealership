import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import AboutUs from "./component/aboutUs";
import ContactUs from "./component/contactUs";
import Register from "./component/register";
import Login from "./component/login";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    await fetch("/api/logout/");
    alert("Loging Out");
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
