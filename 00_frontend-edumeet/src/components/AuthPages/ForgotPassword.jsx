import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { getPasswordResetToken } from "../../services/operations/authAPI";
import logo from "../../assets/images/edumeet-yellow-logo-removebg-preview.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="mt-12 grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div
          className="relative max-w-[500px] p-4 lg:p-8 bg-[#2A2A2A] rounded-xl text-center
          before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent 
          before:animate-border-shine"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6 w-12 h-12">
            <img src={logo} alt="logo" />
          </div>

          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-white text-left">
            {!emailSent ? "Reset your password" : "Check email"}
          </h1>
          <p className="my-4 opacity-80 text-[0.9rem] leading-[1.625rem]  text-gray-300 text-left">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email we can try account recovery."
              : `We have sent the reset email to ${email}`}
          </p>
          <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
          >
            {!emailSent && (
              <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-yellow text-left">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full p-3 bg-[#2D2D2D] border border-transparent rounded-md text-white 
                    focus:ring-2 focus:ring-yellow focus:border-yellow focus:outline-none"
                />
              </label>
            )}
            <Button
              type="submit"
              className=" w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
            >
              {!emailSent ? "Reset Password" : "Resend Email"}
            </Button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2 text-white">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
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

export default ForgotPassword;
