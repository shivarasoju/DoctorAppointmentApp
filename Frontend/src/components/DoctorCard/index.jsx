import { Link } from "react-router-dom";

import { FcLeave } from "react-icons/fc";

import { FaCheckCircle } from "react-icons/fa";

import { MdBlock } from "react-icons/md";

import "./index.css";

const DoctorCard = (props) => {
  const { doctor } = props;
  const { name, id, profile_image, specialization, availability } = doctor;

  const switchAvailability = () => {
    switch (availability) {
      case "Available Today":
        return (
          <p className="avail result">
            <FaCheckCircle size={24} /> {availability}
          </p>
        );
      case "On Leave":
        return (
          <p className="on-leave result">
            <FcLeave size={24} /> {availability}
          </p>
        );
      case "Fully Booked":
        return (
          <p className="fully-booked result">
            <MdBlock size={24} /> {availability}
          </p>
        );
    }
  };

  return (
    <li className="list">
      <Link to={`/${id}`}>
        <div className="list-item">
          <div className="img-container">
            <img className="img" src={profile_image} alt="shiva" />
          </div>
          <div className="doctor-desc">
            <p className="name">{name}</p>
            <p className="specialization">
              <span className="special">{specialization}</span> by
              Specialization
            </p>
            {switchAvailability()}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default DoctorCard;
