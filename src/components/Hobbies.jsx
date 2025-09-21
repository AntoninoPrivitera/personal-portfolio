import { layout } from "../style";
import { hobbies } from "../constants";
import { motion } from "framer-motion";
import LottieWithVisibility from "./LottieWithVisibility";

// lottie config defaults for reuse
const defaultOptions = {
  loop: true,
  play: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet"
  },
};

const FeatureCard = ({ lottie_animation, activity, sentence, author, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <div className="p-8 mb-8 bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full mx-auto">
        <div
          className={`flex items-center flex-col md:flex-row ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          } space-y-6 md:space-y-0 md:space-x-8 md:space-x-reverse-8`}
        >
          <div className="flex-shrink-0 w-48 h-48 flex-shrink-0">
            <LottieWithVisibility
              animationData={lottie_animation}
              {...defaultOptions}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center text-white flex-grow max-w-xl">
            <p className="italic text-lg font-semibold">{sentence}</p>
            <span className="mt-4 text-sm self-end">{author}</span>
          </div>
        </div>

        <p className="mt-6 text-center text-white text-base font-medium tracking-wide">
          {activity}
        </p>
      </div>
    </motion.div>
  );
};

const Hobbies = () => {
  return (
    <section id="hobbies">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] mb-12">
        Hobbies
      </h1>
      <div className="flex flex-col w-full max-w-7xl mx-auto space-y-6">
        {hobbies.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
