import HeroAbout from "../components/Layout/AboutPage/HeroAbout";
import StepsAbout from "../components/Layout/AboutPage/StepsAbout";
import Vision from "../components/Layout/AboutPage/Vision";
import Faq from "../components/Layout/FAQ";
import HighlightText from "../components/UI/HightlightText";
import TestimonialReview from "../components/UI/testimonialReview";

const About = () => {
  return (
    <div className="container w-screen min-h-screen relative mx-auto flex flex-col items-center justify-between">
      {/* About Heading | section - 1  */}

      <div className="pt-[7rem]">
        <HeroAbout
          ctabtn1={{
            btnText: "Need Help",
            linkto: "/login",
            active: false,
          }}
        />
      </div>

      {/* About Mission | section - 2  */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text={"Steps for edumeet"} />
        </h2>

        {/* mission  */}
        <StepsAbout />
      </div>

      {/* About Mission | section - 2  */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text={"Edumeet Vision"} />
        </h2>

        {/* mission  */}
        <Vision />
      </div>

      {/* FAQ | section - 11 */}
      <Faq />

      {/* Review - section - 12  */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text={"User Testimonial"} />
        </h2>
        {/* Review Slider here */}
        <TestimonialReview />
      </div>
    </div>
  );
};

export default About;
