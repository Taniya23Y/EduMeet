/* eslint-disable no-unused-vars */
import { FaBook, FaBullseye, FaTrophy, FaUsers } from "react-icons/fa";
import VisionBtn from "../../UI/VisionBtn";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Vision = () => {
  const constraintRef = useRef(null);
  const [buttons, setButtons] = useState([
    { id: 1, label: "JavaScript" },
    { id: 2, label: "Online Coding" },
    { id: 3, label: "Java" },
    { id: 4, label: "UI-UX" },
    { id: 5, label: "Backend" },
    { id: 6, label: "Web-dev" },
    { id: 7, label: "Curated Courses" },
    { id: 8, label: "Free" },
  ]);

  return (
    <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12 mx-auto">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-2xl pt-5 pb-5">Why Edumeet ?</h1>
        <p className="font-poppins text-white px-4">
          &ldquo;Your Tech Journey Starts Here 💡 Master Coding with
          EduMeet&ldquo; 🔥
        </p>

        {/* Responsive Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* Box 1 */}
          <div className="bg-[#FFE1B5] rounded-xl p-6 text-black">
            <div className="flex items-center gap-4">
              <VisionBtn Icon={FaBook} />
              <p>Quality Learning Resources</p>
            </div>
            <h1 className="font-bold mt-4">
              Access curated coding courses and study materials.
            </h1>
          </div>

          {/* Box 2 */}
          <div className="bg-[#EB9ED8] rounded-xl p-6 text-black">
            <div className="flex items-center gap-4">
              <VisionBtn Icon={FaBook} />
              <p>Quality Learning Resources</p>
            </div>
            <h1 className="font-bold mt-4">
              Follow step-by-step roadmaps for tech careers.
            </h1>
          </div>

          {/* Box 3 */}
          <div className="bg-[#51C3DD] rounded-xl p-6 text-black">
            <div className="flex items-center gap-4">
              <VisionBtn Icon={FaBullseye} />
              <p>Structured Learning Paths</p>
            </div>
            <h1 className="font-bold mt-4">
              Follow step-by-step roadmaps for tech careers.
            </h1>
          </div>

          {/* Box 4 */}
          <div className="bg-[#94D1B0] rounded-xl p-6 text-black">
            <div className="flex items-center gap-4">
              <VisionBtn Icon={FaUsers} />
              <p>Community Support</p>
            </div>
            <h1 className="font-bold mt-4">
              Interact with peers and curated Community members.
            </h1>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {/* Box 5 */}
          <div className="bg-yellow rounded-xl p-6 text-black">
            <div className="flex items-center gap-4">
              <VisionBtn Icon={FaTrophy} />
              <p>Project-Based Learning</p>
            </div>
            <h1 className="font-bold mt-4">
              Apply skills with real-world projects.
            </h1>
          </div>

          {/* Draggable Buttons */}
          {/* Draggable Buttons Wrapper */}
          <motion.div ref={constraintRef} className="w-full">
            <div className="w-full bg-[#FFEFD8] glass rounded-xl p-6 text-black shadow-lg relative overflow-hidden">
              <div className="flex flex-wrap gap-2 pt-4 justify-end">
                {buttons.map((button) => (
                  <motion.button
                    key={button.id}
                    className="bg-[#874FD4] text-white px-10 py-2 rounded-2xl shadow-md cursor-pointer"
                    drag
                    dragConstraints={constraintRef} // Use ref for constraint
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {button.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
