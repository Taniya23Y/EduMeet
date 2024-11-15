import "../../index.css";
import avatar1 from "../../assets/images/CTA_img1@2x.png";
import avatar2 from "../../assets/images/CTA_img2@2x.png";
import avatar3 from "../../assets/images/CTA_img3@2x.png";
import avatar4 from "../../assets/images/CTA_img1@2x.png";
import avatar5 from "../../assets/images/CTA_img2@2x.png";
import avatar6 from "../../assets/images/CTA_img3@2x.png";
import avatar7 from "../../assets/images/CTA_img1@2x.png";
import avatar8 from "../../assets/images/CTA_img2@2x.png";
import avatar9 from "../../assets/images/CTA_img3@2x.png";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const testimonial = [
  {
    text: "EduMeet has completely changed the way I approach learning. The structured roadmaps are so well-designed that they make even complex topics seem easy to grasp.",
    imageSrc: avatar1,
    name: "Nikita Sharma",
    username: "@nikita_sharma",
  },
  {
    text: "Thanks to EduMeet, I discovered resources I never knew existed. The curated course suggestions and assignments are top-notch. It's like having a personal mentor!",
    imageSrc: avatar2,
    name: "Ukta shah",
    username: "@ukta_shah",
  },
  {
    text: "The platform is a game changer! EduMeet's intuitive design and focus on free learning make it the ultimate destination for upskilling. ",
    imageSrc: avatar3,
    name: "Sofia Anshari",
    username: "@sofia_anshari",
  },
  {
    text: "EduMeet's unique blend of roadmaps and tailored assignments ensures you're always on track. It’s perfect for anyone serious about coding.",
    imageSrc: avatar4,
    name: "Ani Mehra",
    username: "@ani_mehra",
  },
  {
    text: "What I love most about EduMeet is how easy it is to follow a learning path. The roadmaps are clear, concise, and absolutely effective. Great for all levels!",
    imageSrc: avatar5,
    name: "sudhu Thakur",
    username: "@sudhu_thakur",
  },
  {
    text: "EduMeet makes online learning engaging and effective. The assignments and community support keep me motivated throughout my journey. Amazing platform!",
    imageSrc: avatar6,
    name: "pallavi Mehra",
    username: "@pallavi_mehra",
  },
  {
    text: "Finding free and structured coding content was a struggle until I found EduMeet. It bridges the gap between scattered resources and focused learning.",
    imageSrc: avatar7,
    name: "Rohan Goyal",
    username: "@rohan_goyal",
  },
  {
    text: "As a self-learner, EduMeet has been a blessing. The ability to follow a clear roadmap with practical assignments makes a huge difference. Highly recommended!",
    imageSrc: avatar8,
    name: "Priti mehta",
    username: "@priti_mehta",
  },
  {
    text: "The best part about EduMeet is the freedom it offers. With free courses and structured guidance, it’s the ideal platform for anyone serious about learning.",
    imageSrc: avatar9,
    name: "Kartik Moore",
    username: "@Kartik_moore",
  },
];

const firstColumn = testimonial.slice(0, 3);
const secondColumn = testimonial.slice(3, 6);
const thirdColumn = testimonial.slice(6, 9);

const NewTestimonialColumn = ({ testimonial, className }) => (
  <div className={`mx-auto ${className}`}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col mx-auto gap-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {testimonial.map(({ text, imageSrc, name, username }, index) => (
            <div className="card" key={index}>
              <div className="text-black text-[0.99rem]">{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  src={imageSrc}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium -tracking-tight leading-5 text-yellow">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight text-[#963136]">
                    {username}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

// PropTypes for NewTestimonialColumn
NewTestimonialColumn.propTypes = {
  testimonial: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

NewTestimonialColumn.defaultProps = {
  className: "",
};

const ReviewSlider = () => {
  return (
    <section className="mb-6">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-3 mt-4">
          <h2 className="text-2xl font-bold mt-2 text-white">
            What our users say
          </h2>
          <p className="font-medium text-center text-purple-300 pb-9">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div
          className="flex items-center justify-center mx-auto gap-6 max-h-[738px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <NewTestimonialColumn testimonial={firstColumn} />
          <NewTestimonialColumn
            testimonial={secondColumn}
            className="hidden md:block"
          />
          <NewTestimonialColumn
            testimonial={thirdColumn}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
