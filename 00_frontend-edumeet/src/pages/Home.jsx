/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Hero from "../components/Layout/Hero";
import SubHero from "../components/Layout/SubHero";
import Video from "../components/UI/Video";
import ReviewSlider from "../components/UI/ReviewSlider";
import { useRef } from "react";
import CodeBox from "../components/Layout/CodeBox";
import HighlightText from "../components/UI/HightlightText";
import CTAButton from "../components/UI/Button";
import "../index.css";
import { FaArrowRight } from "react-icons/fa";
import TimelineSection from "../components/Layout/TimelineSection";
import LearningLanguageSection from "../Components/Layout/LearningLanguageSection";
import Faq from "../components/Layout/FAQ";

const Home = () => {
  const videoRef = useRef(null);

  // Function to scroll to the video section
  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container w-screen min-h-screen relative mx-auto flex flex-col items-center justify-between">
      {/* hero | section - 1  */}
      <Link to={"/signup"} />
      <div>
        <Hero onDemoClick={scrollToVideo} /> {/* Pass the function as a prop */}
      </div>

      {/* video | section - 2  */}
      <div ref={videoRef}>
        {" "}
        {/* Set ref on the Video section */}
        <Video />
      </div>

      {/* code | section - 3 */}
      <div>
        <CodeBox
          position={"lg:flex-row"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock your
              <HighlightText text={"coding potential "} />
              With Free Online Courses 🪄
            </div>
          }
          subheading={
            "Discover Your Coding Potential With Curated Collection Of  Free Online Courses.Unlock New Skills And Opportunities On Your Journey To Mastery."
          }
          ctabtn1={{
            btnText: "Try it yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false,
          }}
          codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a></nav>\n</body>\n</html>`}
          codeColor={"text-yellow-25"}
          backgroundGradient={"grad"}
        />
      </div>

      {/* subHero | section - 4  */}
      <div>
        <SubHero
          ctabtn1={{
            btnText: "Start Now",
            linkto: "/login",
            active: true,
          }}
        />
      </div>

      {/* code | section - 5 */}
      <div>
        <CodeBox
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-4xl font-semibold">
              Begin your coding journey in seconds With
              <HighlightText text={"EduMeet"} /> 🚀
            </div>
          }
          subheading={
            "Experience hands on coding from day one with EduMeet. Explore curated Courses, Personalized learning paths, Roadmaps and a supportive community for a seamless coding journey."
          }
          ctabtn1={{
            btnText: "Try it yourself",
            linkto: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false,
          }}
          codeblock={`const generateOTP = () => {\nconst digits = “0123456789”;\nconst length = 6;\n return Array.from({ length }, (_, i) => i + 1).\n reduce((initialValue) => {\n const randomIndex = Math.floor(Math.random\n()* digits.length);\n return (initialValue += digits[randomIndex]);\n}, “” );\n};\nconsole.log(generateOTP());`}
          codeColor={"text-yellow-25"}
          backgroundGradient={"grad"}
        />
      </div>

      {/* courseSlider | section - 6  */}

      {/* courseSlider | section - 7  */}

      {/* switchers | section - 8  */}
      <div className="bg-black text-white">
        {/* buttons and criss-cross background */}
        <div className="home_bg h-[310px] rounded-xl">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="hidden lg:block h-[180px]"></div>
            <div className=" mt-8 lg:mt-0 flex flex-row gap-7 text-white ">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Section 2 header, timeline, learning */}
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          {/* Section 2 header */}
          <div className="flex flex-col lg:flex-row justify-between gap-5 mb-10 -mt-20 lg:mt-[95px]">
            <div className="text-4xl font-semibold lg:w-[45%]">
              Get the Skills you need for a
              <HighlightText text={"Job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 lg:w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline section */}
          <TimelineSection />

          <LearningLanguageSection />
        </div>
      </div>

      {/* FQA - section - 9  */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-0">
          <HighlightText text={"Discover More with Our FAQ Section"} />
        </h2>
      </div>

      {/* FAQ | section - 10 */}
      <Faq />

      {/* Review - section - 11  */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10">
          <HighlightText text={"Review Section"} />
        </h2>
        {/* Review Slider here */}
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Home;
