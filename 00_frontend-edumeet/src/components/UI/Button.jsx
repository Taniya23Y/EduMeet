/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-tl-2xl rounded-br-2xl rounded-tr-2xl font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
        ${active ? "bg-yellow text-white" : " bg-purple-400"}
        hover:scale-95 transition-all duration-200 hover:shadow-none
        `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
