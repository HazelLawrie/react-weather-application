import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<Weather />, rootElement);
