/* eslint-disable react/prop-types */

import logoBTN from "../../assets/images/hero-logobtn.png";
import arrowPurple from "../../assets/images/arrowPurple.png";

const Hero = ({ onDemoClick }) => {
  return (
    <div className="text-center pt-[11rem] space-y-6 bg-black text-white py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Tagline */}
      <p className="text-white text-opacity-75 text-base sm:text-lg md:text-xl">
        Streamline Your Coding Journey
      </p>

      {/* Main Heading */}
      <h1 className="text-yellow text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight">
        Learn the Skill You
      </h1>
      <h1 className="text-yellow text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight">
        Need to Succeed
      </h1>

      {/* "With" and Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 relative">
        <div className="flex items-center gap-3">
          <h1 className="text-yellow text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            With
          </h1>

          {/* Logo Button */}
          <button className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 rounded-full overflow-hidden bg-white">
            <img
              src={logoBTN}
              alt="EduMeet Logo"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Demo Button with scroll action */}
          <button
            aria-label="demo"
            onClick={onDemoClick}
            className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 bg-purple-500 text-black font-bold rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl"
          >
            DEMO
          </button>
        </div>
      </div>

      {/* Arrow Positioned Between Buttons and Video */}
      <img
        src={arrowPurple}
        alt="Arrow pointing to video"
        className="absolute top-[21.625rem] left-[19rem] w-[8rem] h-[8.7rem] md:top-[24.625rem] md:left-[49rem] md:w-[20rem] md:h-[18.7rem]  object-contain hidden md:block 2xl:hidden"
      />

      {/* Subtitle with Underline */}
      <div className="relative mt-8 pt-4">
        <p className="text-[0.7rem] sm:text-base md:text-lg lg:text-xl text-gray-300">
          <span role="img" aria-label="star">
            🌟
          </span>{" "}
          Now learning from anywhere, and build your bright career.{" "}
          <span role="img" aria-label="star">
            🌟
          </span>
        </p>

        {/* Underline */}
        <div className="w-11/12 sm:w-[30rem] md:w-[35rem] lg:w-[37rem] h-1 bg-pink-300 rounded-full mt-1 mx-auto"></div>
      </div>
    </div>
  );
};

export default Hero;
