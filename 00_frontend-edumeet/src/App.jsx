import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import OpenRoute from "./components/Auth/OpenRoute.jsx";
import NavBar from "./components/Layout/NavBar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Error from "./pages/Error.jsx";
import { RiWifiOffLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showPopup, setShowPopup] = useState(!navigator.onLine);

  // Monitor internet connectivity
  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
      setShowPopup(!navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  // Prevent scrolling when popup is shown
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showPopup]);

  return (
    <div className="overflow-hidden w-screen min-h-screen bg-black flex flex-col relative">
      <NavBar />

      {/* Internet Connection Popup */}
      {showPopup && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity duration-300 ${
            isOnline ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md transform transition-transform duration-500 ${
              !isOnline ? "scale-100" : "scale-90"
            }`}
          >
            <RiWifiOffLine size={40} className="text-yellow mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-red-800 mb-2">
              No Internet Connection
            </h2>
            <p className="text-black mb-6">
              Please check your internet connection and try again.
            </p>
            <button
              className="bg-red-600 text-white rounded-tl-2xl rounded-br-2xl rounded-tr-2xl px-4 py-2 rounded hover:bg-red-700"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

        {/* <Route path="/update-password/:id" element={<ResetPassword />} /> */}

        {/* <Route path="/verify-email" element={<VerifyOtp />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
