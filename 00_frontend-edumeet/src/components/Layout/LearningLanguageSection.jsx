import know_your_progress from "../../assets/images/Know_your_progress.png";
import compare_with_others from "../../assets/images/Compare_with_others.png";
import plan_your_lesson from "../../assets/images/plan-your-lessons.png";
import CTAButton from "../../components/UI/Button";
import HighlightText from "../../components/UI/HightlightText";

const LearningLanguageSection = () => {
  return (
    <div className="mt-[130px] mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for
          <HighlightText text={" learning any language"} />
        </div>

        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
          Using spin makes learning multiple languages easy. With 20+ languages,
          realistic voice-over, progress tracking, custom schedules, and more.
        </div>

        {/* Overlapping Images Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center mt-10 relative">
          <img
            src={know_your_progress}
            alt="Know Your Progress"
            className="object-contain w-[80%] md:w-[30%] rounded-lg shadow-lg z-10"
          />
          <img
            src={compare_with_others}
            alt="Compare With Others"
            className="object-contain w-[80%] md:w-[30%] rounded-lg shadow-lg -ml-20 z-20"
          />
          <img
            src={plan_your_lesson}
            alt="Plan Your Lessons"
            className="object-contain w-[80%] md:w-[30%] rounded-lg shadow-lg -ml-20 z-30"
          />
        </div>

        <div className="w-fit mt-10">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn more</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
