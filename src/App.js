
import "./App.css";
import "./Weather.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
       <div className="container">
        <Weather defaultCity="Glasgow" />
        <Footer />
    </div>
    </div>
  );
}
export default App;
