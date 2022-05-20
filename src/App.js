// import logo from './logo.svg';
// import './App.css';

import BirthDay from "./components/BirthDay";
import BirthRashi from "./components/BirthRashi";
import DailyHoroscope from "./components/DailyHoroscope";
import Home from "./components/Home";
import IndianNameCalculator from "./components/IndianNameCalculator";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/daily-horoscope" element={<DailyHoroscope />} />
    <Route path="/birth-rashi" element={<BirthRashi />} />
    <Route path="/birth-day" element={<BirthDay />} />
    <Route path="/indian-name-calculator" element={<IndianNameCalculator />} />
          {/* <Route path="/">
            <Home />
          </Route>
          <Route path="/daily-horoscope">
          <DailyHoroscope />
          </Route>
          <Route path="/birthrashi">
            <BirthRashi />
          </Route>
          <Route path="/birthday">
            <BirthDay />
          </Route>
          <Route path="/indian-name-calculator">
            <IndianNameCalculator />
          </Route> */}
    </Routes>
      {/* <Home />
      <DailyHoroscope />
      <BirthRashi />
      <BirthDay />
      <IndianNameCalculator /> */}
    </div>
    </Router>
  );
}

export default App;
