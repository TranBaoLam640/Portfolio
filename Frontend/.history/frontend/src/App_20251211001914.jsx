import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import login from "./loginPage/Login";
import Home from "./homePage/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;