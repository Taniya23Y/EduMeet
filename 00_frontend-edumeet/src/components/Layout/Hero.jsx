import logoBTN from "../../assets/hero-logobtn.png";

const Hero = () => {
  return (
    <div className="text-center  pt-[12rem] space-y-6 bg-black text-white py-20 px-4 md:px-10 lg:px-20">
      {/* Tagline */}
      <p className="text-white text-base text-opacity-75 md:text-base lg:text-base">
        Streamline Your Coding Journey
      </p>

      {/* Main Heading */}
      <h1 className="text-yellow text-4xl md:text-5xl lg:text-7xl font-bold uppercase">
        Learn the Skill You
      </h1>
      <h1 className="text-yellow text-4xl md:text-5xl lg:text-7xl font-bold uppercase">
        Need to Succeed
      </h1>

      {/* "With" and Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
        <div className="flex gap-3">
          <h1 className="text-yellow text-4xl md:text-5xl lg:text-7xl font-bold uppercase">
            With
          </h1>

          {/* Logo Button */}
          <button className="w-24 h-12 md:w-32 md:h-14 lg:w-30 lg:h-18 rounded-full overflow-hidden bg-white">
            <img
              src={logoBTN}
              alt="EduMeet Logo"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Demo Button */}
          <button className="w-24 h-12 md:w-32 md:h-14 lg:w-30 lg:h-18 bg-purple-500 text-black font-bold rounded-full flex items-center justify-center text-2xl">
            DEMO
          </button>
        </div>
      </div>

      {/* Subtitle with Underline */}
      <div className="relative mt-10">
        <p className="text-lg md:text-xl text-gray-300">
          <span role="img" aria-label="star">
            🌟
          </span>{" "}
          Now learning from anywhere, and build your bright career.{" "}
          <span role="img" aria-label="star">
            🌟
          </span>
        </p>
        {/* Underline */}
        <div
          className="w-[37rem] h-1 bg-purple-300 rounded-full mt-1 mx-auto"
          // style={{ maxWidth: "60%" }}
        ></div>
      </div>

      {/* Decorative Dashed Line */}
      {/* <div className="mt-8 flex justify-center">
        <svg width="200" height="50" className="text-purple-300">
          <path
            d="M0 20 Q50 50, 100 20 T200 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;
