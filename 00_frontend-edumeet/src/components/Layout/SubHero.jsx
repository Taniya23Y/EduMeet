/* eslint-disable react/prop-types */
import CTAButton from "../UI/Button";
import yellowImage from "../../assets/images/yellowImage.png";
import purpleImage from "../../assets/images/purpleImage.png";
import redImage from "../../assets/images/redImage.png";
import greenImage from "../../assets/images/greenImage.png";
import blueImage from "../../assets/images/blueImage.png";
import grayGreenImage from "../../assets/images/grayGreenImage.png";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";

const SubHero = ({ ctabtn1 }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20  lg:pt-10 lg:pb-32">
      {/* left partition */}
      {/* <div className="left flex-1 w-[100%] lg:w-[50%]"> */}
      <div className="left w-[100%] lg:w-[50%] flex flex-col gap-8">
        {/* headings */}
        <div className="font-bold text-p3 text-3xl">
          <h1>Your Free Resources for Learning</h1>
          <h1 className="flex items-center">
            <span>Path</span>
            <FaLongArrowAltRight className="w-[2rem]" />
            <span>Edumeet</span>
          </h1>
        </div>

        {/* para text */}
        <div className="  text-gray-300 text-base font-normal w-[85%] -mt-3 ">
          <p className="text-sm">
            EduMeet is an aggregator of multimedia educational materials from
            around the websites.
          </p>
        </div>

        {/* button */}
        <div className="w-[10rem] ">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>

        {/* category choice */}
        <div>
          <h1 className="font-semibold">Choose Your Category:</h1>
          <div className="w-[20%] pt-3 flex items-center justify-between gap-9 text-center text-[13px]">
            {/* 1st */}
            <div className="flex flex-col gap-4">
              <p>Documents</p>
              <div className="bg-purple-300 rounded-full w-9 h-9 flex justify-center items-center mx-auto">
                <div>🗒️</div>
              </div>
            </div>
            {/* 2nd */}
            <div className="flex flex-col gap-4">
              <p>Video</p>
              <div className="bg-purple-300 rounded-full w-9 h-9 flex justify-center items-center mx-auto">
                <div>📹</div>
              </div>
            </div>
            {/* 3rd */}
            <div className="flex flex-col gap-4">
              <p>Tutorials</p>
              <div className="bg-purple-300 rounded-full w-9 h-9 flex justify-center items-center mx-auto">
                <div>📝</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right partition */}
      <div className="flex flex-col gap-[13rem] pb-16">
        {/* 1 to 3 img */}
        <div className="flex gap-6 pb-7">
          {/* 1st image */}
          <div className="w-[8rem] h-[5rem] rounded-full">
            <img
              src={yellowImage}
              alt="students-images"
              className="object-cover"
            />
          </div>

          {/* 2nd image */}
          <div className="w-[8rem] h-[9rem]">
            <img
              src={purpleImage}
              alt="students-images"
              className="rounded-full object-cover"
            />
          </div>

          {/* 3rd image */}
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
          {/* 4th image */}
          <div className="w-[8rem] h-[8rem] pt-16">
            <img
              src={greenImage}
              alt="students-images"
              className="rounded-full object-cover"
            />
          </div>

          {/* 5th image */}
          <div className="w-[8rem] h-[8rem]">
            <img
              src={blueImage}
              alt="students-images"
              className="rounded-full object-cover"
            />
          </div>

          {/* 6th image */}
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
