import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import DoctorProfilePage from "./components/DoctorProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:id" element={<DoctorProfilePage />} />
      <Route
        path="*"
        element={
          <h1 className="text-center mt-10 text-red-500">Page Not Found</h1>
        }
      />
    </Routes>
  );
}

export default App;
