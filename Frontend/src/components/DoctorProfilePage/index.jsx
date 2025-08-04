// import { useParams } from "react-router-dom";

// import { useState, useEffect } from "react";

// import ClipLoader from "react-spinners/ClipLoader";

// import { FaCheckCircle } from "react-icons/fa";

// import Popup from "reactjs-popup";

// import "reactjs-popup/dist/index.css";

// import Navbar from "../Navbar";

// import "./index.css";

// const apiStatusConstants = {
//   success: "SUCCESS",
//   failure: "FAILURE",
//   loading: "LOADING",
//   init: "INITIAL",
// };
// const initState = {
//   nameError: "",
//   emailError: "",
//   dateError: "",
// };

// const initialFormData = {
//   patientName: "",
//   email: "",
//   date: "",
//   isSubmitted: false,
// };
// const DoctorProfilePage = (props) => {
//   const [getDoctorData, setDoctorData] = useState({});
//   const [apiStatus, setApiStatus] = useState(apiStatusConstants.init);
//   const [formData, setFormData] = useState(initialFormData);
//   const [error, setError] = useState({
//     nameError: "",
//     emailError: "",
//     dateError: "",
//   });

//   const handleName = (e) => {
//     setFormData({ ...formData, patientName: e.target.value });
//   };
//   const handleEmail = (e) => {
//     setFormData({ ...formData, email: e.target.value });
//   };
//   const handleDate = (e) => {
//     setFormData({ ...formData, date: e.target.value });
//   };
//   const handleForm = (e) => {
//     e.preventDefault();

//     if (formData.patientName?.trim() === "") {
//       setError({ ...error, nameError: "*Required name" });
//     } else if (formData.email?.trim() === "") {
//       setError({ ...error, emailError: "*Required email" });
//     } else if (formData.date === "") {
//       setError({ ...error, dateError: "*Required date" });
//     } else if (!formData.email.includes("@")) {
//       setError({ ...error, emailError: "*Invalid email format" });
//     } else {
//       setFormData({ ...initialFormData, isSubmitted: true });
//       setError({ ...initState });
//     }
//   };

//   const { id } = useParams();
//   const url = `${import.meta.env.VITE_API_URL}${id}`;
//   useEffect(() => {
//     const getData = async () => {
//       setApiStatus(apiStatusConstants.loading);
//       const response = await fetch(url);
//       const data = await response.json();
//       if (response.ok === true) {
//         setDoctorData(data);
//         setApiStatus(apiStatusConstants.success);
//       } else {
//         setApiStatus(apiStatusConstants.failure);
//       }
//     };
//     getData();
//   }, [url]);

//   const renderSuccessView = () => {
//     const {
//       name,
//       experience,
//       hospital_location,
//       qualification,
//       specialization,
//       ratings,
//       consultation_fee,
//       availability_schedule,
//       profile_image,
//     } = getDoctorData;
//     const avalDays = availability_schedule
//       ?.filter((item) => item.status === "Available Today")
//       .map((item) => item.day);
//     let availstring = avalDays?.join(", ");

//     return (
//       <>
//         <div className="profile-sub-container">
//           <div className="profile-left-container">
//             <img className="profile-img" src={profile_image} alt={name} />
//           </div>
//           <div className="profile-right-container">
//             <div>
//               <p className="dark-text">PROFILE</p>
//               <p>{name}</p>
//             </div>
//             <p>{qualification}</p>
//             <p>{hospital_location}</p>
//             <div>
//               <p className="dark-text">SPECIALITY</p>
//               <p>{specialization}</p>
//             </div>
//             <div>
//               <p className="dark-text">EXPERIENCE</p>
//               <p>{experience}+</p>
//             </div>
//             <div>
//               <p className="dark-text">RATING</p>
//               <p>{ratings}</p>
//             </div>
//             <div>
//               <p className="dark-text">CONSULTATION FEE</p>
//               <p>{consultation_fee}</p>
//             </div>
//             <div>
//               <p className="dark-text">AVAILABLE ON</p>
//               <p>{availstring}</p>
//             </div>
//             <Popup
//               className="popup"
//               trigger={<button className="book-btn">Book Appointment</button>}
//               modal
//               nested
//               onClose={() => {
//                 setFormData({ ...initialFormData });
//                 setError({ ...initState });
//               }}
//             >
//               {(close) =>
//                 formData.isSubmitted === true ? (
//                   <div className="submitted-container">
//                     <FaCheckCircle className="green" size={30} />
//                     <p className="submit-text">
//                       You have booked appointment successfully
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="modal">
//                     <form className="form" onSubmit={handleForm}>
//                       <div className="input-container">
//                         <div>
//                           <label htmlFor="patientName">PATIENT NAME</label>
//                         </div>
//                         <input
//                           id="patientName"
//                           type="text"
//                           name="patientName"
//                           className="input"
//                           placeholder="Enter patient name"
//                           onChange={handleName}
//                         />
//                         {error.nameError && (
//                           <p className="err-class">{error.nameError}</p>
//                         )}
//                       </div>
//                       <div className="input-container">
//                         <div>
//                           <label htmlFor="email">EMAIL</label>
//                         </div>
//                         <input
//                           id="email"
//                           type="text"
//                           name="email"
//                           className="input"
//                           placeholder="Enter patient email"
//                           onChange={handleEmail}
//                         />
//                         {error.emailError && (
//                           <p className="err-class">{error.emailError}</p>
//                         )}
//                       </div>
//                       <div className="input-container">
//                         <div>
//                           <label htmlFor="date">SELECT DATE</label>
//                         </div>
//                         <input
//                           id="date"
//                           type="date"
//                           name="date"
//                           placeholder="Enter patient name"
//                           onChange={handleDate}
//                         />
//                         {error.dateError && (
//                           <p className="err-class">{error.dateError}</p>
//                         )}
//                       </div>
//                       <div className="btn-container">
//                         <button type="submit" className="submit-btn">
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 )
//               }
//             </Popup>
//           </div>
//         </div>
//       </>
//     );
//   };

//   const renderContent = () => {
//     switch (apiStatus) {
//       case apiStatusConstants.loading:
//         return (
//           <div className="flex justify-center items-center min-h-[200px]">
//             <ClipLoader size={50} color="#2D9CDB" />
//           </div>
//         );

//       case apiStatusConstants.failure:
//         return (
//           <div className="text-center text-red-500 font-semibold">
//             Failed to load doctor data. Please try again later.
//           </div>
//         );

//       case apiStatusConstants.success:
//         return renderSuccessView();

//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="profile-main-container">{renderContent()}</div>
//     </>
//   );
// };

// export default DoctorProfilePage;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { FaCheckCircle } from "react-icons/fa";
import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import Navbar from "../Navbar";
import "./index.css";

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
  init: "INITIAL",
};

const initState = {
  nameError: "",
  emailError: "",
  dateError: "",
};

const initialFormData = {
  patientName: "",
  email: "",
  date: "",
  isSubmitted: false,
};

const DoctorProfilePage = () => {
  const [getDoctorData, setDoctorData] = useState({});
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.init);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({ ...initState });

  const handleName = (e) => {
    setFormData({ ...formData, patientName: e.target.value });
  };

  const handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleDate = (e) => {
    setFormData({ ...formData, date: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (formData.patientName.trim() === "") {
      setError({ ...error, nameError: "*Required name" });
    } else if (formData.email.trim() === "") {
      setError({ ...error, emailError: "*Required email" });
    } else if (!formData.email.includes("@")) {
      setError({ ...error, emailError: "*Invalid email format" });
    } else if (formData.date === "") {
      setError({ ...error, dateError: "*Required date" });
    } else {
      setFormData({ ...initialFormData, isSubmitted: true });
      setError({ ...initState });
    }
  };

  const { id } = useParams();
  const url = `${import.meta.env.VITE_API_URL}${id}`;

  useEffect(() => {
    const getData = async () => {
      setApiStatus(apiStatusConstants.loading);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Fetch failed");
        const data = await response.json();
        setDoctorData(data);
        setApiStatus(apiStatusConstants.success);
      } catch (error) {
        console.error("Failed to fetch doctor data:", error.message);
        setApiStatus(apiStatusConstants.failure);
      }
    };

    getData();
  }, [url]);

  const renderSuccessView = () => {
    const {
      name,
      experience,
      hospital_location,
      qualification,
      specialization,
      ratings,
      consultation_fee,
      availability_schedule,
      profile_image,
    } = getDoctorData;

    const avalDays = availability_schedule
      ?.filter((item) => item.status === "Available Today")
      .map((item) => item.day);
    const availstring = avalDays?.join(", ") || "No availability info";

    return (
      <div className="profile-sub-container">
        <div className="profile-left-container">
          <img className="profile-img" src={profile_image} alt={name} />
        </div>
        <div className="profile-right-container">
          <div>
            <p className="dark-text">PROFILE</p>
            <p>{name}</p>
          </div>
          <p>{qualification}</p>
          <p>{hospital_location}</p>
          <div>
            <p className="dark-text">SPECIALITY</p>
            <p>{specialization}</p>
          </div>
          <div>
            <p className="dark-text">EXPERIENCE</p>
            <p>{experience}+</p>
          </div>
          <div>
            <p className="dark-text">RATING</p>
            <p>{ratings}</p>
          </div>
          <div>
            <p className="dark-text">CONSULTATION FEE</p>
            <p>{consultation_fee}</p>
          </div>
          <div>
            <p className="dark-text">AVAILABLE ON</p>
            <p>{availstring}</p>
          </div>

          <Popup
            className="popup"
            trigger={<button className="book-btn">Book Appointment</button>}
            modal
            nested
            onClose={() => {
              setFormData({ ...initialFormData });
              setError({ ...initState });
            }}
          >
            {(close) =>
              formData.isSubmitted ? (
                <div className="submitted-container">
                  <FaCheckCircle className="green" size={30} />
                  <p className="submit-text">
                    You have booked appointment successfully
                  </p>
                </div>
              ) : (
                <div className="modal">
                  <form className="form" onSubmit={handleForm}>
                    <div className="input-container">
                      <label htmlFor="patientName">PATIENT NAME</label>
                      <input
                        id="patientName"
                        type="text"
                        className="input"
                        placeholder="Enter patient name"
                        value={formData.patientName}
                        onChange={handleName}
                      />
                      {error.nameError && (
                        <p className="err-class">{error.nameError}</p>
                      )}
                    </div>

                    <div className="input-container">
                      <label htmlFor="email">EMAIL</label>
                      <input
                        id="email"
                        type="text"
                        className="input"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleEmail}
                      />
                      {error.emailError && (
                        <p className="err-class">{error.emailError}</p>
                      )}
                    </div>

                    <div className="input-container">
                      <label htmlFor="date">SELECT DATE</label>
                      <input
                        id="date"
                        type="date"
                        className="input"
                        value={formData.date}
                        onChange={handleDate}
                      />
                      {error.dateError && (
                        <p className="err-class">{error.dateError}</p>
                      )}
                    </div>

                    <div className="btn-container">
                      <button type="submit" className="submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )
            }
          </Popup>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return (
          <div className="flex justify-center items-center min-h-[200px]">
            <ClipLoader size={50} color="#2D9CDB" />
          </div>
        );
      case apiStatusConstants.failure:
        return (
          <div className="text-center text-red-500 font-semibold">
            Failed to load doctor data. Please try again later.
          </div>
        );
      case apiStatusConstants.success:
        return renderSuccessView();
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile-main-container">{renderContent()}</div>
    </>
  );
};

export default DoctorProfilePage;
