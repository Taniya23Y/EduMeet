/* eslint-disable react/prop-types */

const HighlightText = ({ text }) => {
  return (
    <span
      //   className="bg-gradient-to-b from-[#8e7f42] via-[#e2d116] to-[#A6FFCB]
      className="bg-gradient-to-b from-[#8e7f42] via-[#e2d116] to-[#b6653a] 
    text-transparent bg-clip-text font-bold"
    >
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
