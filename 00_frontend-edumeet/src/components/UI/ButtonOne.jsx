// ButtonOne.jsx
import { Link } from "react-router-dom";

const ButtonOne = () => {
  return (
    <Link
      to="/login"
      className="bg-white justify-center flex items-center rounded-xl px-6 py-2 cursor-pointer"
    >
      <h1 className="text-[18px] text-black font-medium">Login</h1>
    </Link>
  );
};

export default ButtonOne;
