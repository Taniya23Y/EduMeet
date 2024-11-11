import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing

const ButtonOne = () => {
  return (
    <div className="bg-white justify-center flex items-center rounded-xl px-6 py-2 cursor-pointer">
      <Link to="/login1">
        {" "}
        <h1 className="text-[18px] text-black font-medium">Login</h1>
      </Link>
    </div>
  );
};

export default ButtonOne;
