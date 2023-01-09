import React from "react";
import image from "../assets/2.jpeg";
import "../index.css";
import EmailIcon from "@mui/icons-material/Email";

function Info() {
  return (
    <div>
      <img src={image} alt="avatar" className="avatar" />
      <h3 className="info-name">Kristiyan Draganov</h3>
      <h4 className="info-job">Aspiring Frontend Developer</h4>
      <div className="email-container">
        <button className="email">
          <EmailIcon className="email-icon" fontSize="small" />
          <span className="email-text">Email</span>
        </button>
      </div>
    </div>
  );
}

export default Info;
