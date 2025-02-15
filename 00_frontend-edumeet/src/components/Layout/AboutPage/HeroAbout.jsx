/* eslint-disable react/prop-types */
import { useState } from "react";
import HighlightText from "../../UI/HightlightText";
import Button from "../../UI/Button";
import aboutImage1 from "../../../assets/images/aboutImage1.jpg";
import aboutImage2 from "../../../assets/images/aboutImage2.jpg";
import aboutImage3 from "../../../assets/images/aboutImage3.jpg";
import aboutImage4 from "../../../assets/images/aboutImage4.jpg";
import aboutImage5 from "../../../assets/images/aboutImage5.jpg";
import aboutImage6 from "../../../assets/images/aboutImage6.jpg";
import { FaArrowRight, FaPlay, FaTimes } from "react-icons/fa";

const HeroAbout = ({ ctabtn1 }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const images = [
    { src: aboutImage1, alt: "Inspiring classroom environment" },
    { src: aboutImage2, alt: "Collaborative learning session" },
    { src: aboutImage3, alt: "Interactive workshop in progress" },
    { src: aboutImage4, alt: "Hands-on project activity" },
    { src: aboutImage5, alt: "Community discussion group" },
    { src: aboutImage6, alt: "Virtual learning session" },
  ];

  const handleVideoOpen = () => {
    setVideoUrl(
      "https://www.youtube.com/embed/ZK-rNEhJIDs?autoplay=1&loop=1&playlist=ZK-rNEhJIDs"
    );
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setVideoUrl(""); // Stop video when modal is closed
  };

  return (
    <div className="w-full relative flex justify-center">
      <div
        className="w-full max-w-7xl relative about about-bg rounded-xl shadow-2xl backdrop-blur-lg bg-opacity-80"
        style={{
          background:
            "linear-gradient(129.77deg, #8a2be2 -6.46%, #ffa500 60.04%, #f8f8ff 124.53%)",
          transform: "translateY(-40px)",
        }}
      >
        <div className="w-full bg-black/80 relative py-20 rounded-lg shadow-lg backdrop-blur-md">
          {/* Content Section */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
              <h1 className="text-white text-5xl font-bold">
                We Help People With their <br />{" "}
                <HighlightText text={"Right course "} />
              </h1>
              <p className="text-gray-300 font-light">
                &ldquo;At EduMeet, learners connect to unlock endless
                possibilities with tailored courses, hands-on projects, and a
                supportive community.&ldquo;
              </p>
              <div className="w-40 sm:w-[10rem]">
                <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
                  <div className="flex gap-2 items-center transition-transform duration-300 hover:scale-105">
                    {ctabtn1.btnText}
                    <FaArrowRight />
                  </div>
                </Button>
              </div>

              {/* Watch Demo Video Button */}
              <div
                className="flex items-center gap-4 mt-4 cursor-pointer group"
                onClick={handleVideoOpen}
              >
                {/* Centered Video Play Icon */}
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white">
                  <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-yellow">
                    <FaPlay className="text-white text-lg" />
                  </div>
                </div>

                <div>
                  <p className="text-xs">Get started!</p>
                  <span className="text-green-300 text-[0.9rem] font-semibold group-hover:underline">
                    Watch Demo
                  </span>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 grid grid-cols-3 gap-6 relative">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-0 ${
                    index % 2 === 0 ? "rotate-3" : "-rotate-3"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                    draggable="false"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="relative bg-yellow rounded-lg shadow-lg w-full max-w-3xl p-1">
            {/* Close Button */}

            <div
              className="absolute cursor-pointer w-8 h-8 rounded-full top-3 right-3 bg-red-500 hover:bg-red-600 flex items-center justify-center"
              onClick={handleVideoClose}
            >
              <FaTimes className="text-white text-xl" />
            </div>

            {/* Embedded Video */}
            <div className="w-full">
              {videoUrl && (
                <iframe
                  className="w-full h-[400px] rounded-lg"
                  src={videoUrl}
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroAbout;
