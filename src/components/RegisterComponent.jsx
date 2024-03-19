import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import campusconnectLogo from "../assets/campusconnectLogo.png";
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function RegisterComponent() {
    let navigate = useNavigate();
    const [credentails, setCredentials] = useState({});
    const login = async () => {
        try{
            let res = await RegisterAPI(credentails.email, credentails.password);
            toast.success("Account created!");
            navigate("/home");
        } catch (err) {
            console.log(err);
            toast.error("Unable to create your account");
        }
    };
    
    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        navigate("./home");
    }
    return (
        <div className="login-wrapper">
            <img src={campusconnectLogo} className="campusconnectLogo"/>

            <div className="login-wrapper-inner">
                <h1 className="heading">Linking minds, shaping futures: Campus Connect</h1>
                
                <div className="auth-inputs">
                <input
                    onChange={(event) =>
                        setCredentials({ ...credentails, email: event.target.value })
                    }
                    type="email"
                    className="common-input"
                    placeholder="Email or phone number"
                />

                <input
                    onChange={(event) =>
                        setCredentials({ ...credentails, password: event.target.value })
                    }
                    type="password"
                    className="common-input"
                    placeholder="Password (6 or more characters)"
                />
                </div>
                <button onClick={login} className="login-btn">
                    Agree & Join
                </button>
            </div>
            <hr className="hr-text" data-content="or" />
            <div className="google-btn-container">
                <GoogleButton className="google-btn" onClick={googleSignIn} />

                <p className="go-to-signup">
                    Already on Campus Connect?{" "}
                    <span className="join-now" onClick={() => navigate("/")}>
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};