import axios from "axios";
import { set } from "lodash";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { setCookie, getCookie } from "./../functions/cookies";

const Home = () => {
    useEffect(() => {
        if (!getCookie("token")) {
            location.href = "/login";
            return <div></div>;
        }

        axios
            .get("/api/auth/user")
            .then((res) => {
                // Authorized
                console.log(res.data);
            })
            .catch((err) => {
                // Unauthorized
                setCookie("token", "");
                location.href = "/login";
            });
    }, []);

    return <div>Home</div>;
};

export default Home;
