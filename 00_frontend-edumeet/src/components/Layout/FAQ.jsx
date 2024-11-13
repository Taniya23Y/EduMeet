import { Element } from "react-scroll";
import { faq } from "../../constants/Faq.jsx";
import FaqItem from "../../constants/FaqItem.jsx";
import logo from "../../assets/images/logo.png";
import "../../index.css";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative pb-6 ">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn`&apos`t kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You`&apos`ve got questions, we`&apos`ve got answers.
            </p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-yellow" />
        </div>

        <div className="glass-bg relative z-2 ">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex w-[5rem] h-[5rem] items-center justify-center border-2 border-yellow bg-black">
              <img src={logo} alt="logo" className="w-[90rem]" />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          <div className="absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-yellow max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
