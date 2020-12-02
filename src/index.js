import React from "react";
import ReactDOM from "react-dom";
import Pressure from "./Pressure";
import Form from "./Form";
import City from "./City";
import Date from "./Date";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App card card-body">
      <div className="container">
      <Form />
      <City city="London" />
      <Date />
      <Temp temperature={11} />
      <Pressure />
      <hr />
      <Forecast />
      <Footer />
    </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
