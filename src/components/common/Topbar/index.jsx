import React from "react";
import campusconnectLogo from "../../../assets/campusconnectLogo.png"
import { FaBeer } from "react-icons/fa";

import "./index.scss";

export default function Topbar() {
  return (
    <div className="topbar-main">
        <img className="campusconnect-logo" src={campusconnectLogo} alt="Campus Connect logo" />
        <FaBeer />
    </div>
  );
}