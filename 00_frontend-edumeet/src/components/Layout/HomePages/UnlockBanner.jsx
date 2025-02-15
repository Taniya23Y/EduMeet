import { unlockBannerPart } from "../../../data/unlockbanner-part";
import HighlightText from "../../UI/HightlightText";
import { useState } from "react";
import CourseCard from "../../UI/CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const UnlockBanner = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(unlockBannerPart[0].courses);
  const [currentCard, setCurrentCard] = useState(
    unlockBannerPart[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = unlockBannerPart.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="pb-10 sm:pb-3 px-4">
      <div className="text-3xl font-semibold text-center lg:text-4xl">
        Unlock the
        <HighlightText text={"Power of Code"} />
      </div>

      <p className="text-center text-[#f2d6ad] text-[16px] sm:text-[18px] mt-4">
        Learn to build anything you can imagine
      </p>

      {/* Tabs Section */}
      <div className="mt-5 flex flex-wrap justify-center rounded-full bg-[#C084FC] mb-3 border border-blue-950 px-2 py-2 gap-2">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-sm sm:text-base lg:text-lg flex items-center gap-3 text-black
                ${
                  currentTab === element
                    ? "bg-black text-yellow font-medium"
                    : "text-black"
                } rounded-full transition-all duration-200 cursor-pointer
                hover:bg-black-100 hover:text-yellow text-center px-3 py-0 lg:px-6 lg:py-2`}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      {/* Course Cards Section */}
      <div className="flex flex-wrap gap-9 justify-center mt-5">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UnlockBanner;
