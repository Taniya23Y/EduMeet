import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { resetPassword } from "../../services/operations/authAPI";
import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../UI/Button";
import logo from "../../assets/images/edumeet-yellow-logo-removebg-preview.png";

const ResetPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = location.pathname.split("/").at(-1);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      dispatch(
        resetPassword(
          formData.password,
          formData.confirmPassword,
          token,
          setresetComplete
        )
      );
    } else {
      alert("Passwords do not match");
    }
  };

  const handleOnChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const [formData, setformData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { loading } = useSelector((state) => state.auth);
  const [resetComplete, setresetComplete] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="mt-12 grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="custom-loader"></div>
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
            {!resetComplete ? "Choose  new password" : "Reset complete!"}
          </h1>
          <p className="my-4 opacity-80 text-[0.9rem] leading-[1.625rem]  text-gray-300 text-left">
            {!resetComplete
              ? "Almost done. Enter your new password and you're all set."
              : `All done! We have sent an email to ${"nn"} to confirm`}
          </p>
          <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
          >
            {!resetComplete && (
              <div>
                <div className=" relative mt-4">
                  <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-yellow text-left">
                      New Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleOnChange}
                      placeholder="Enter Password"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full p-3 bg-[#2D2D2D] border border-transparent rounded-md text-white 
                    focus:ring-2 focus:ring-yellow focus:border-yellow focus:outline-none"
                    />
                  </label>
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-9 z-[10] cursor-pointer"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible
                        fontSize={24}
                        fill="#AFB2BF"
                        color="white"
                        className=""
                      />
                    ) : (
                      <AiOutlineEye
                        fontSize={24}
                        fill="#AFB2BF"
                        color="white"
                      />
                    )}
                  </span>
                </div>
                <div className=" relative mt-4">
                  <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-yellow text-left">
                      Confirm New Password{" "}
                      <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleOnChange}
                      placeholder="Enter Password"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      className="w-full p-3 bg-[#2D2D2D] border border-transparent rounded-md text-white 
                    focus:ring-2 focus:ring-yellow focus:border-yellow focus:outline-none"
                    />
                  </label>
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-10 z-[10] cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible
                        fontSize={24}
                        fill="#AFB2BF"
                        color="white"
                        className=""
                      />
                    ) : (
                      <AiOutlineEye
                        fontSize={24}
                        fill="#AFB2BF"
                        color="white"
                      />
                    )}
                  </span>
                </div>
              </div>
            )}
            {!resetComplete ? (
              <Button
                type="submit"
                className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
              >
                Reset Password
              </Button>
            ) : (
              <Link to={"/login"}>
                <Button className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900">
                  Return to login
                </Button>
              </Link>
            )}
          </form>

          <div className="mt-6 flex items-center justify-between">
            <Link to={"/login"}>
              <p className="flex items-center gap-x-2 text-richblack-5">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                </svg>{" "}
                Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

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

export default ResetPassword;
