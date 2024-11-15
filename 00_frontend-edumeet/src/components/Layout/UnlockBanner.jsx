import { unlockBannerPart } from "../../data/unlockbanner-part";
import HighlightText from "../UI/HightlightText";
import { useState } from "react";
import CourseCard from "../UI/CourseCard";

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
    console.log(result[0].courses);
  };

  return (
    <div className="pb-20 md:pb-40">
      <div className="text-4xl font-semibold text-center lg:text-4xl">
        Unlock the
        <HighlightText text={"Power of Code"} />
      </div>

      <p className="text-center text-[#f2d6ad] text-[18px] mt-5">
        Learn to build anything you can imagine
      </p>

      <div
        className="mt-5 flex flex-row rounded-full bg-[#C084FC] mb-3 border-blue-950
      px-1 py-1"
      >
        {tabsName.map((element, index) => {
          return (
            <div
              className={` text-[13px] lg:text-[16px] flex flex-row items-center gap-3 text-black
                ${
                  currentTab === element
                    ? "bg-black text-yellow font-medium"
                    : "text-black"
                } rounded-full transition-all duration-200 cursor-pointer
                hover:bg-black-100 hover:text-yellow text-center px-3 py-1 lg:px-7 lg:py-2`}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      {/* <div className='lg:h-[150px]'></div> */}

      {/* course card group */}

      <div className=" flex gap-9 w-full justify-center mt-5 flex-wrap lg:absolute right-0 left-0 mr-auto ml-auto">
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
