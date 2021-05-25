import axios from "axios";
import { set } from "lodash";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { setCookie, getCookie } from "../functions/cookies";

const Home = () => {
    const logoutHandler = () => {
        axios
            .get("/api/auth/logout")
            .then((res) => {
                console.log(res.data);
                setCookie("token", "");
                location.href = "/login";
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1 className="text-center p-5">Home</h1>
            <button className="btn btn-primary" onClick={logoutHandler}>
                Log out
            </button>
        </div>
    );
};

export default Home;
