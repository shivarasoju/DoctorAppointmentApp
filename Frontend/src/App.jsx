import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import DoctorProfilePage from "./components/DoctorProfilePage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/:id" element={<DoctorProfilePage />} />
    </Routes>
  );
}

export default App;
