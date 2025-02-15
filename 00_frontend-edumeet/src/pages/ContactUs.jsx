import CardBox from "../components/Layout/ContactUsPage/CardBox";
import ContactBox from "../components/Layout/ContactUsPage/ContactBox";
import ContactHero from "../components/Layout/ContactUsPage/ContactHero";
import Faq from "../components/Layout/FAQ";
import ButtonThree from "../components/UI/ButtonThree";
import HighlightText from "../components/UI/HightlightText";
import TestimonialReview from "../components/UI/testimonialReview";
import { ContactBoxDescription } from "../data/ContactBoxDescription";

const ContactUs = () => {
  return (
    <div className="container w-screen min-h-screen relative mx-auto flex flex-col items-center justify-between">
      {/* Contact Heading get in touch | section - 1  */}

      <section className="pt-[7rem] text-center">
        <ContactHero />
      </section>

      {/* Contact Box | section - 2  */}
      <section>
        <div className=" flex items-center justify-center p-5">
          <ContactBox />
        </div>
      </section>

      {/* Contact Heading get in touch | section - 3  */}
      <section className="flex justify-center items-center flex-col space-y-3">
        <div className="pt-20">
          <ButtonThree>About us</ButtonThree>
        </div>
        <div className="text-3xl font-semibold">
          <HighlightText text={"Our Values"} />
        </div>
        <div className="text-center px-3/20">
          <p>
            At EduMeet, we value innovation, accessibility, and learning for
            all. Reach out to us — we&apos;re here to support your journey!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {ContactBoxDescription.map((det, idx) => (
            <CardBox name={det.name} desc={det.desc} img={det.img} key={idx} />
          ))}
        </div>
      </section>

      {/* FAQ | section - 4 */}

      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white">
        <h2 className="text-center text-4xl font-semibold mt-12 pt-12">
          <HighlightText text={"Discover More with Our FAQ Section"} />
        </h2>
      </div>

      {/* FAQ | section - 4.1 */}
      <Faq />

      {/* Review - section - 5 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter  text-white">
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text={"User Testimonials"} />
        </h2>
        {/* Review Slider here */}
        <TestimonialReview />
      </div>

      {/* Newsletter - section - 6 */}
      <div>
        <h2 className="text-center text-4xl font-semibold mt-10 pt-9">
          <HighlightText text={"NewsLetter"} />
        </h2>

        {/* NewsLetter design */}
        <div className="mt-10 pt-9"></div>
      </div>
    </div>
  );
};

export default ContactUs;
