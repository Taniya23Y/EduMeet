// Home.js
import { Link } from "react-router-dom";
import Hero from "../components/Layout/Hero";
import Video from "../components/UI/Video";
import { useRef } from "react";
import CodeBox from "../components/Layout/CodeBox";
import HighlightText from "../components/UI/HightlightText";
import "../index.css";

const Home = () => {
  const videoRef = useRef(null);

  // Function to scroll to the video section
  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container relative mx-auto flex flex-col w-11/12 items-center justify-between">
      {/* section - 1  */}
      <Link to={"/signup"} />
      <div>
        <Hero onDemoClick={scrollToVideo} /> {/* Pass the function as a prop */}
      </div>

      {/* video section - 2  */}
      <div ref={videoRef}>
        {" "}
        {/* Set ref on the Video section */}
        <Video />
      </div>

      {/* code - section - 3 */}
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
          codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a></nav>\n</body>`}
          codeColor={"text-yellow-25"}
          backgroundGradient={"grad"}
        />
      </div>

      {/* code - section - 4 */}
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
    </div>
  );
};

export default Home;
