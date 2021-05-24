import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";

const Index = () => {
    return (
        <div className="container">
            <Login />
        </div>
    );
};

export default Index;

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}
