import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Layout/Hero";
import "./App.css";
import Login1 from "./components/Auth/Login1.jsx";
import NavBar from "./components/Layout/NavBar.jsx";
// import Login from "./components/Auth/Login.jsx";

const App = () => {
  return (
    <Router>
      <main className="overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login1" element={<Login1 />} />{" "}
          {/* Route for Login1 component */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
