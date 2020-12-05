
import "./App.css";
import "./Weather.css";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
       <div className="container">
        <Weather defaultCity="Glasgow" />
        <hr />
        <Forecast />
        <Footer />
    </div>
    </div>
  );
}
export default App;
