import { Link } from "react-router-dom";

import { FcLeave } from "react-icons/fc";

import { FaCheckCircle } from "react-icons/fa";

import { MdBlock } from "react-icons/md";

import PropTypes from "prop-types";

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
      default:
        return <p className="unknown result">{availability}</p>;
    }
  };

  return (
    <li className="list">
      <Link to={`/${id}`}>
        <div className="list-item">
          <div className="img-container">
            <img
              className="img"
              src={profile_image}
              alt={name || "Doctor profile"}
            />
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

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    availability: PropTypes.string.isRequired,
  }).isRequired,
};

DoctorCard.defaultProps = {
  doctor: {
    name: "Unknown",
    profile_image: "/default.png",
    specialization: "General",
    availability: "Status Unknown",
  },
};

export default DoctorCard;
