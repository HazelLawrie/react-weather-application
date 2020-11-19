import React from "react";
import ReactDOM from "react-dom";
import Pressure from "./Pressure";
import Form from "./Form";
import City from "./City";
import Date from "./Date";
import Temp from "./Temp";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App card card-body">
      <Form />
      <City city="London, United Kingdom" />
      <Date />
      <Temp temperature={11} />
      <Pressure />
      <hr />
      <Forecast />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
