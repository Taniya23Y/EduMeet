import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/images/edumeet-yellow-logo-removebg-preview.png";

import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";

import { FaLongArrowAltLeft } from "react-icons/fa";

function Template({ title, description1, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="relative mt-16 min-h-screen bg-black flex flex-col items-center justify-center text-white">
      {/* Home Arrow - Always at the Top */}
      <div className="fixed top-4 left-4 flex items-center text-white cursor-pointer z-10">
        <Link to="/" className="flex items-center underline hover:text-yellow">
          <FaLongArrowAltLeft className="mr-1" />
          <p>Home</p>
        </Link>
      </div>

      {loading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <div
            className="relative w-[90%] max-w-[500px] bg-[#2A2A2A] p-8 rounded-xl text-center 
            before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent 
            before:animate-border-shine"
          >
            {/* Logo */}
            <div className="flex justify-center mb-6 w-12 h-12">
              <img src={logo} alt="logo" />
            </div>

            {/* Signup/Login Form */}
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <p className="text-gray-300 mb-6">{description1}</p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          {/* Already have an account? */}
          <div className="mt-4 ">
            <>
              {formType === "signup" ? (
                <div className="flex gap-2 items-center justify-center">
                  <p className="opacity-40 text-sm">
                    {" "}
                    Already have an account?{" "}
                  </p>

                  <Link to="/login" className="text-white hover:text-yellow">
                    Login
                  </Link>
                </div>
              ) : (
                <div className="flex gap-2 items-center justify-center">
                  <p className="opacity-40 text-sm">Don’t have an account? </p>

                  <Link to="/signup" className="text-white hover:text-yellow">
                    Sign up
                  </Link>
                </div>
              )}
            </>
          </div>

          {/* Terms and Privacy */}
          <div className="mt-16 mb-7 text-sm text-white text-center">
            <p>
              <Link
                to="/terms"
                className="pr-3 opacity-40 hover:underline hover:text-white hover:opacity-100"
              >
                Terms of Use
              </Link>{" "}
              |{" "}
              <Link
                to="/privacy"
                className="pl-3 opacity-40 hover:underline hover:text-white hover:opacity-100"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

// Animated Border Keyframes
const style = `
  @keyframes border-shine {
    0% { border-color: yellow transparent transparent transparent; }
    25% { border-color: transparent yellow transparent transparent; }
    50% { border-color: transparent transparent yellow transparent; }
    75% { border-color: transparent transparent transparent yellow; }
    100% { border-color: yellow transparent transparent transparent; }
  }
  .before\\:animate-border-shine::before {
    content: '';
    position: absolute;
    inset: 0;
    border-width: 2px;
    border-style: solid;
    animation: border-shine 2.5s linear infinite;
    border-radius: inherit;
    pointer-events: none;
  }
`;

// Append Style to Head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = style;
  document.head.appendChild(styleSheet);
}

// Prop Types Validation
Template.propTypes = {
  title: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  formType: PropTypes.oneOf(["signup", "login"]).isRequired,
};

export default Template;
