import student1 from "../../../assets/images/yellowImage.png";
import student2 from "../../../assets/images/purpleImage.png";
import student3 from "../../../assets/images/redImage.png";
import student4 from "../../../assets/images/greenImage.png";
import student5 from "../../../assets/images/blueImage.png";
import student6 from "../../../assets/images/grayGreenImage.png";
import HighlightText from "../../UI/HightlightText";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="font-bold text-3xl">
        <HighlightText text={"Get In Touch"} />
      </h1>
      <p className="mt-4 text-lg text-white">
        Connect with our team and get in touch
      </p>
      <p className="text-lg text-white">
        —we’re here to help and answer any questions you have!
      </p>

      {/* Overlapping Student Images & Arrow */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <div className="flex -space-x-3">
          {[student1, student2, student3, student4, student5, student6].map(
            (student, index) => (
              <img
                key={index}
                src={student}
                alt={`Student ${index + 1}`}
                className="w-14 h-14 rounded-full object-cover border-[3px] border-white shadow-lg"
              />
            )
          )}
        </div>

        {/* Bouncing Animated Arrow */}
        <motion.div
          className="text-5xl text-white"
          animate={{
            x: [0, 20, 0], // Moves left to right and back
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <FaLongArrowAltRight />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHero;
