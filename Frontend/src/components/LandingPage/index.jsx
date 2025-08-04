import { useState, useEffect } from "react";

import ClipLoader from "react-spinners/ClipLoader";

import Navbar from "../Navbar";

import DoctorCard from "../DoctorCard";

import "./index.css";

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
  initial: "INITIAL",
};

const LandingPage = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  useEffect(() => {
    const getDoctorsData = async () => {
      setApiStatus(apiStatusConstants.loading);
      try {
        const url = `${import.meta.env.VITE_API_URL}/`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setDoctorsData(data);
          setFilteredData(data);
          setApiStatus(apiStatusConstants.success);
        } else {
          setApiStatus(apiStatusConstants.failure);
        }
      } catch (error) {
        setApiStatus(apiStatusConstants.failure);
      }
    };

    getDoctorsData();
  }, []);

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    const tempData = doctorsData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput) ||
        item.specialization.toLowerCase().includes(searchInput)
    );
    setFilteredData(tempData);
  };

  const renderDoctorList = () => {
    if (filteredData.length === 0) {
      return (
        <div className="text-center text-gray-600 my-6">No doctors found.</div>
      );
    }

    return (
      <ul className="doctor-list">
        {filteredData.map((item) => (
          <DoctorCard doctor={item} key={item.id} />
        ))}
      </ul>
    );
  };

  const renderContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return (
          <div className="flex justify-center items-center my-10">
            <ClipLoader size={50} color="#ffffff" />
          </div>
        );

      case apiStatusConstants.failure:
        return (
          <div className="text-center text-red-500 font-semibold my-6">
            Failed to load doctors. Please try again later.
          </div>
        );

      case apiStatusConstants.success:
        return renderDoctorList();

      default:
        return null;
    }
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
            aria-label="Search doctors by name or specialization"
          />
        </div>
        {renderContent()}
      </div>
    </>
  );
};

export default LandingPage;
