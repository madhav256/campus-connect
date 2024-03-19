import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import campusconnectLogo from "../assets/campusconnectLogo.png";
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function LoginComponent() {
    let navigate = useNavigate();
    const [credentails, setCredentials] = useState({});
    const login = async () => {
        try{
            let res = await LoginAPI(credentails.email, credentails.password);
            toast.success("Signed in to Campus Connect!");
            navigate("./home");
        } catch (err) {
            console.log(err);
            toast.error("Please check your login credentials");
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
                <h1 className="heading">Sign in</h1>
                <p className="sub-heading">Bridge your campus, bond your community.</p>
                <div className="auth-inputs">
                <input
                    onChange={(event) =>
                        setCredentials({ ...credentails, email: event.target.value })
                    }
                    type="email"
                    className="common-input"
                    placeholder="Email or Phone"
                />

                <input
                    onChange={(event) =>
                        setCredentials({ ...credentails, password: event.target.value })
                    }
                    type="password"
                    className="common-input"
                    placeholder="Password"
                />
                </div>
                <button onClick={login} className="login-btn">
                    Sign in to Campus Connect
                </button>
            </div>
            <hr class="hr-text" data-content="or" />
            <div className="google-btn-container">
                <GoogleButton className="google-btn" onClick={googleSignIn} />

                <p className="go-to-signup">
                    New to Campus Connect?{" "}
                    <span className="join-now" onClick={() => navigate("/register")}>
                        Join now
                    </span>
                </p>
            </div>
        </div>
    );
};