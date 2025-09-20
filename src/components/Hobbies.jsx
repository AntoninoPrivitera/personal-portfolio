import { layout } from "../style";
import { hobbies } from "../constants";
import Lottie from "react-lottie-player";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet"
  },
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 0
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const FeatureCard = ({ lottie_animation, activity, sentence, author }) => (
  <div className="p-8 min-h-[320px] flex flex-col justify-between">
    <div className="flex items-center space-x-8 flex-grow">
      <div className="flex-shrink-0 w-48 h-48">
        <Lottie
          animationData={lottie_animation}
          {...defaultOptions}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-center flex-grow text-white">
        <p className="italic text-lg font-semibold">{sentence}</p>
        <span className="self-end mt-4 text-sm">{author}</span>
      </div>
    </div>

    <p className="mt-6 text-center text-white text-base font-medium tracking-wide">
      {activity}
    </p>
  </div>
);

const Hobbies = () => {
  return (
    <section id="hobbies">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Hobbies
      </h1>
      <motion.div
        className={layout.sectionReverse}
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          showDots={true}
          containerClass="w-full max-w-7xl mx-auto"
          itemClass="flex justify-center"
        >
          {hobbies.map((feature, index) => (
            <FeatureCard key={feature.id} index={index} {...feature} />
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Hobbies;
