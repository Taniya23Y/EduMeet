import { Element } from "react-scroll";
import { faq } from "../../constants/Faq.jsx";
import FaqItem from "../../constants/FaqItem.jsx";
import logo from "../../assets/images/logo.png";
import "../../index.css";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative pb-6">
        <div className="container relative z-2 py-10 pb-20 flex flex-col items-center text-center">
          <div>
            <h3 className="text-3xl max-md:h5 max-w-640 max-lg:max-w-md mb-4 text-white font-bold">
              Curiosity didn&apos;t kill the cat, it gave it answers.
            </h3>
            <p className="text-xl max-lg:max-w-sm text-purple-300">
              You&apos;ve got questions, we&apos;ve got answers.
            </p>
          </div>
        </div>

        <div className="glass-bg relative z-2">
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

          {/* Bottom line inside the FAQ box */}
          <div className="absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-yellow max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
