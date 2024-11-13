import Logo1 from "../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../assets/images/TimelineImages.png";

const timeline = [
  {
    Logo: Logo1,
    heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    heading: "Responsibility",
    Description: "Students will always be Top Priority",
  },
  {
    Logo: Logo3,
    heading: "Flexibility",
    Description: "The ability to sw is an important skill",
  },
  {
    Logo: Logo4,
    heading: "Solve The Problem",
    Description: "Code Your Way to Solution",
  },
];

const TimelineSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[8rem] items-center justify-between p-6">
      {/* Timeline List */}
      <div className="w-full lg:w-[45%] flex flex-col gap-8 relative">
        {timeline.map((element, index) => (
          <div key={index} className="relative flex items-center gap-6">
            {/* Logo Circle */}
            <div className="w-[60px] h-[60px] bg-purple-100 shadow-md rounded-full flex items-center justify-center relative z-10">
              <img src={element.Logo} alt={`Logo ${index + 1}`} />
            </div>

            {/* Dotted Line */}
            {index < timeline.length - 1 && (
              <div className="dotted-line absolute left-[30px] top-[70px] w-px h-[60px]"></div>
            )}

            {/* Description */}
            <div>
              <h2 className="text-[20px] font-semibold text-yellow">
                {element.heading}
              </h2>
              <p className="text-gray-200 text-base">{element.Description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Image with Glass Effect */}
      <div className="w-full lg:w-[50%] flex justify-center relative">
        <div className="glass-bg w-[85%] h-[85%] p-6 rounded-xl shadow-lg flex items-center justify-center">
          <img
            src={timelineImage}
            alt="Timeline"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
