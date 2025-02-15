import {
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaHeadphones,
} from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProblemSolution = () => {
  return (
    <div className="w-11/12 mx-auto max-w-maxContent flex flex-col lg:flex-row items-center justify-between mt-10 gap-24">
      {/* ProblemSolution List */}
      <div className="relative w-full lg:w-[45%] flex flex-col">
        <div className="glass w-full max-w-[390px] h-auto p-6 rounded-xl shadow-2xl flex items-center justify-center relative bg-white">
          <div className="w-full h-[22rem] object-fit rounded-lg shadow-xl">
            {/* Overlapping Box Left */}
            <div className="overlap absolute right-[-15%] bottom-[-5%] bg-[#2DAE76] text-white p-6 rounded-lg shadow-xl w-[60%] flex flex-col gap-4">
              <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <FaRocket className="text-[#2DAE76] w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xs xl:text-xl font-bold">
                  Powerful Program
                </h1>
                <p className="text-xs xl:text-sm opacity-90 ">
                  Unlock your full potential with structured learning paths and
                  expert guidance.
                </p>
              </div>
            </div>
            {/* Overlapping Box Right */}
            <div className="overlap absolute left-[-15%] bottom-[-5%] bg-[#B97FF3] text-white p-6 rounded-lg shadow-xl w-[60%] h-[60%] flex flex-col gap-4">
              <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <FaHeadphones className="text-[#B97FF3] w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xs xl:text-xl font-bold">
                  Full Support 24/7
                </h1>
                <p className="text-xs xl:text-sm opacity-90">
                  Our dedicated team is always available to assist you at any
                  time of the day.
                </p>
              </div>
            </div>

            {/* Overlapping Box Top Left */}
            <div className="overlap absolute left-[-15%] top-[-10%] bg-[#E6B920] text-white p-6 rounded-lg shadow-xl w-[60%] flex flex-col gap-4">
              <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <FaLightbulb className="text-[#E6B920] w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xs xl:text-xl font-bold">
                  Innovative Ideas
                </h1>
                <p className="text-xs xl:text-sm opacity-90">
                  Discover creative solutions and fresh perspectives to enhance
                  learning.
                </p>
              </div>
            </div>
            {/* Overlapping Box Top Right */}
            <div className="overlap absolute right-[-15%] top-[-10%] bg-[#96DBDD] text-white p-6 rounded-lg shadow-xl w-[30vw] xl:w-[60%] flex flex-col gap-4">
              <div className="bg-white p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <FaShieldAlt className="text-[#96DBDD] w-7 h-7" />
              </div>
              <div>
                <h1 className="text-xs xl:text-xl font-bold">
                  Personalized Learning
                </h1>
                <p className="text-xs xl:text-sm opacity-90">
                  Tailor your learning experience with customized
                  recommendations, progress tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem & Solution Section */}
      <div className="w-full lg:w-[40%] text-center lg:text-left flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          We Know Your Problem & Solution
        </h2>
        <p className=" md:text-lg leading-relaxed text-gray-300 font-light">
          EduMeet helps learners navigate the overwhelming amount of free coding
          content available online.
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6 items-center">
            <div className="bg-gray-300 text-[#2DAE76] p-5 w-12 h-12 flex items-center justify-center text-lg font-semibold rounded-full shadow-md">
              1
            </div>
            <div>
              <p className="font-semibold text-lg text-yellow">
                Too much unstructured content
              </p>
              <p className="text-gray-300 font-light text-xs">
                Finding the right resources among countless YouTube videos and
                blogs is overwhelming for learners.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="bg-gray-300 text-[#2DAE76] p-5 w-12 h-12 flex items-center justify-center text-lg font-semibold rounded-full shadow-md">
              2
            </div>
            <div>
              <p className="font-semibold text-lg text-yellow">
                Lack of guided learning paths
              </p>
              <p className="text-gray-300 font-light text-xs">
                Students struggle with self-paced learning due to the absence of
                structured roadmaps and hands-on practice.
              </p>
            </div>
          </div>
        </div>

        {/* button */}
        <button className=" rounded-tl-2xl rounded-br-2xl w-full h-12 flex gap-4 items-center justify-center text-lg font-medium text-gray-900 bg-[#B97FF3] shadow-md hover:bg-[#2DAE76] hover:scale-95 transition-all duration-200 hover:shadow-none">
          Check Courses <FaLongArrowAltRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProblemSolution;
