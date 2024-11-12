import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login1 from "./components/Auth/Login1.jsx";
import NavBar from "./components/Layout/NavBar.jsx";
import Footer from "./components/Layout/Footer.jsx";
// import Login from "./components/Auth/Login.jsx";

const App = () => {
  return (
    <div className="overflow-hidden w-screen min-h-screen bg-black flex flex-col ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login1" element={<Login1 />} />{" "}
        {/* Route for Login1 component */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
