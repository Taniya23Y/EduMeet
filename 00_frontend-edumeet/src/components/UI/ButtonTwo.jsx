// ButtonTwo.jsx
import { Link } from "react-router-dom";

const ButtonTwo = () => {
  return (
    <Link
      to="/signup"
      className="bg-white rounded-tl-2xl rounded-br-2xl justify-center flex items-center px-6 py-2 cursor-pointer"
    >
      <h1 className="text-[18px] text-black font-medium">Signup</h1>
    </Link>
  );
};

export default ButtonTwo;
