import axios from "axios";
import { set } from "lodash";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { setCookie, getCookie } from "./../functions/cookies";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (getCookie("token")) {
            axios
                .get("/api/auth/user")
                .then((res) => {
                    // Authorized
                    location.href = "/";
                })
                .catch((err) => {
                    // Unauthorized
                    setCookie("token", "");
                    location.reload();
                });
        }
    }, []);

    const submitHandler = () => {
        const loginInfo = {
            email: email,
            password: password,
        };

        axios
            .post("/api/auth/login", loginInfo)
            .then((res) => {
                setLoggedIn(true);
                setCookie("token", res.data.access_token);
                location.href = "/";
            })
            .catch((err) => {
                // Invalid credentials
                console.log(err);
                setCookie("token", "");
                console.log("invalid");
            });
    };

    return (
        <div className="container p-5">
            {loggedIn && <h2> You're logged in! </h2>}
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button
                    type="button"
                    onClick={submitHandler}
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
