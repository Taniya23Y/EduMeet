/* eslint-disable react/prop-types */
import CTAButton from "../UI/Button";
import yellowImage from "../../assets/images/yellowImage.png";
import purpleImage from "../../assets/images/purpleImage.png";
import redImage from "../../assets/images/redImage.png";
import greenImage from "../../assets/images/greenImage.png";
import blueImage from "../../assets/images/blueImage.png";
import grayGreenImage from "../../assets/images/grayGreenImage.png";
import {
  FaArrowRight,
  FaLongArrowAltRight,
  FaPaperPlane,
  FaPencilRuler,
  FaVideo,
} from "react-icons/fa";
import HighlightText from "../UI/HightlightText";

const SubHero = ({ ctabtn1 }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 lg:pt-10 lg:pb-32">
      {/* left partition */}
      <div className="left w-full lg:w-3/5 flex flex-col gap-6 lg:gap-8">
        {/* headings */}
        <div className="font-bold text-p3 text-3xl sm:text-4xl">
          <h1>Your Free Resources for Learning</h1>
          <h1 className="flex items-center pt-3 text-center mx-auto">
            <span>Path</span>
            <pre> </pre>
            <FaLongArrowAltRight className="w-[1.5rem] sm:w-[2rem]" />
            <pre> </pre>
            <HighlightText text={"EduMeet"} /> 🚀
          </h1>
        </div>

        {/* para text */}
        <div className="text-gray-300 text-sm sm:text-base font-normal w-full sm:w-[85%] -mt-2 sm:-mt-3">
          <p>
            EduMeet is a platform that aggregates free multimedia educational
            content from various online sources. It provides structured
            roadmaps, tailored assignments, and an intuitive interface, making
            learning accessible and efficient for users of all skill levels.
          </p>
        </div>

        {/* button */}
        <div className="w-40 sm:w-[10rem]">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>

        {/* category choice */}
        <div>
          <h1 className="font-semibold text-lg sm:text-xl">
            Choose Your Category:
          </h1>
          <div className="pt-3 text-sm sm:text-lg flex flex-wrap items-center gap-6 text-center">
            {/* 1st */}
            <div className="flex flex-col gap-2 sm:gap-4 items-center">
              <p>Documents</p>
              <div className="bg-purple-300 rounded-full w-12 h-12 sm:w-[4rem] sm:h-[4rem] flex justify-center items-center">
                <FaPaperPlane />
              </div>
            </div>
            {/* 2nd */}
            <div className="flex flex-col gap-2 sm:gap-4 items-center">
              <p>Video</p>
              <div className="bg-purple-300 rounded-full w-12 h-12 sm:w-[4rem] sm:h-[4rem] flex justify-center items-center">
                <FaVideo />
              </div>
            </div>
            {/* 3rd */}
            <div className="flex flex-col gap-2 sm:gap-4 items-center">
              <p>Tutorials</p>
              <div className="bg-purple-300 rounded-full w-12 h-12 sm:w-[4rem] sm:h-[4rem] flex justify-center items-center">
                <FaPencilRuler />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right partition */}
      <div className="hidden lg:flex flex-col gap-[13rem] pb-16">
        {/* 1 to 3 img */}
        <div className="flex gap-6 pb-7">
          <div className="w-[8rem] h-[5rem] rounded-full">
            <img
              src={yellowImage}
              alt="students-images"
              className="object-cover"
            />
          </div>
          <div className="w-[8rem] h-[9rem]">
            <img
              src={purpleImage}
              alt="students-images"
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-[8rem] h-[8rem]">
            <img
              src={redImage}
              alt="students-images"
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* 4 to 6 img */}
        <div className="flex gap-6">
          <div className="w-[8rem] h-[8rem] pt-16">
            <img
              src={greenImage}
              alt="students-images"
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-[8rem] h-[8rem]">
            <img
              src={blueImage}
              alt="students-images"
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-[8rem] h-[9rem] pt-11">
            <img
              src={grayGreenImage}
              alt="students-images"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
