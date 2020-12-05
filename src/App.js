
import "./App.css";
import "./Weather.css";
import Weather from "./Weather";
import Footer from "./Footer";
import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div className="App">
       <div className="container">
        <Weather defaultCity="Glasgow" />
        <hr />
        <WeatherForecast />
        <Footer />
    </div>
    </div>
  );
}
export default App;
