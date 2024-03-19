import React from "react";
import campusconnectLogo from "../../../assets/campusconnectLogo.png"
import user from "../../../assets/user.png";
import { AiOutlineHome, 
         AiOutlineUserSwitch,
         AiOutlineSearch,
         AiOutlineMessage,
         AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

import "./index.scss";

export default function Topbar() {
  return (
    <div className="topbar-main">
        <img className="campusconnect-logo" src={campusconnectLogo} alt="Campus Connect logo" />
        <div className="react-icons">
          <AiOutlineSearch size={30} className="react-icon"/>
          <AiOutlineHome size={30} className="react-icon"/>
          <AiOutlineUserSwitch size={30} className="react-icon"/>
          <BsBriefcase size={30} className="react-icon"/>
          <AiOutlineMessage size={30} className="react-icon"/>
          <AiOutlineBell size={30} className="react-icon"/>
        </div>
        <img className="user-logo" src={user} alt="User" />
    </div>
  );
}