import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Fof from "./Components/404";
import Login from "./Components/Login";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/AdminPanel" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<Fof />} />
    </Routes>
  );
}

export default App;
