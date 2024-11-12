import VideoBox from "../../assets/images/MainVideo.mp4";
import { useState } from "react";
import Cursor from "./Cursor";

const Video = () => {
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseEnter = () => {
    setCursorVisible(true); // Show the cursor when hovering over the video
  };

  const handleMouseLeave = () => {
    setCursorVisible(false); // Hide the cursor when leaving the video
  };

  return (
    <div>
      <div
        id="demo"
        aria-label="demo"
        className="conatiner shadow-blue-200 bg-white rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4 rounded-2xl">
          <video
            muted
            loop
            autoPlay
            className="rounded-2xl w-[60rem] h-[30rem] object-cover"
          >
            <source src={VideoBox} type="video/mp4" />
          </video>
        </div>
        <Cursor visible={cursorVisible} />
      </div>
    </div>
  );
};

export default Video;
