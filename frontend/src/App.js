import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import LoginComponent from "./components/pages/LoginComponent";

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" exact/>
          <Route path="/login" element={<LoginComponent/>}/>
          <Route path="/signup" element={<LoginComponent/>}/>
          <Route path="/employee" element={<LoginComponent/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>  
  );
}

export default App;
