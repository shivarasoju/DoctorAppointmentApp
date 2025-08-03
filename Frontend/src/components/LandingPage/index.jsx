import { useState, useEffect } from "react";

import Navbar from "../Navbar";

import DoctorCard from "../DoctorCard";

import "./index.css";

const LandingPage = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getDoctorsData = async () => {
      const url = `${import.meta.env.VITE_API_URL}/`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok === true) {
        setDoctorsData(data);
        setFilteredData(data);
      } else {
        setError(data);
      }
    };
    getDoctorsData();
  }, []);

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    const tempData = doctorsData?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput) ||
        item.specialization.toLowerCase().includes(searchInput)
    );
    setFilteredData(tempData);
  };

  return (
    <>
      <Navbar />
      <div className="landing-page-maincontainer">
        <div>
          <input
            type="search"
            className="search-input"
            onChange={handleSearch}
            placeholder="Enter doctor name or specialization"
          />
        </div>
        <ul className="doctor-list">
          {filteredData.map((item) => (
            <DoctorCard doctor={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default LandingPage;
