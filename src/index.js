import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App card card-body">
      <div className="container">
      <Weather />
      <hr />
      <Forecast />
      <Footer />
    </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
