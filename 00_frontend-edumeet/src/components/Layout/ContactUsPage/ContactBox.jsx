import HighlightText from "../../UI/HightlightText";
import CallImed from "./CallImed";
import ContactForm from "./ContactForm";

const ContactBox = () => {
  return (
    // <div className="bg-gradient-to-br from-[#9189a3] via-[#31214F] to-[#49356A] text-white p-6 md:p-12 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto">
    <div className="bg-[#FFB400] glass  text-white p-6 md:p-12 rounded-3xl w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-xl md:text-3xl font-bold text-white">
            <HighlightText text={" Let’s discuss Something Cool together"} />
          </h2>

          {/* Stats Section */}
          <div className="hidden md:grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-3xl font-bold text-[#96DCDD]">45+</h3>
              <p className="text-sm text-[#96DCDD] font-semibold">
                Successful Lectures
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#96DCDD]">130+</h3>
              <p className="text-sm text-[#96DCDD]">Best Reviews</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#96DCDD] ">350+</h3>
              <p className="text-sm text-[#96DCDD]">Happy Learners</p>
            </div>
          </div>

          <CallImed />
        </div>

        {/* Right Side (Contact Form) */}
        <ContactForm />
      </div>

      {/* Mobile view*/}
      <div className="md:hidden flex flex-col gap-6 mt-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-3xl font-bold text-[#96DCDD]">45+</h3>
            <p className="text-sm text-[#96DCDD] font-semibold">
              Successful Lectures
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#96DCDD]">130+</h3>
            <p className="text-sm text-[#96DCDD]">Best Reviews</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#96DCDD] ">350+</h3>
            <p className="text-sm text-[#96DCDD]">Happy Learners</p>
          </div>
        </div>

        <p className="italic text-[#dad6d6] ">
          <span className="font-bold">
            “Let’s shape your learning journey together!
          </span>{" "}
          At EduMeet, we’re committed to helping you unlock your potential with
          curated roadmaps, structured learning paths, and personalized
          assignments. Have questions about our platform, suggestions for
          improvement, or ideas for collaboration? We’re here to listen and
          support you. Drop us a message, and let’s build a smarter, brighter
          future for learners like you. Get in touch today and start your
          journey with EduMeet!<span className="font-bold">”</span>
        </p>
        <p className="font-semibold text-[#DB2777]">- Edumeet-Team</p>
      </div>
    </div>
  );
};

export default ContactBox;
