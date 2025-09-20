import styles, { layout } from "../style";
import { certificates } from "../constants";
import { motion } from "framer-motion";

const FeatureCard = ({ logo, title }) => (
  <div className="relative w-full aspect-square group overflow-hidden rounded-md">
    <img
      data-sal="zoom-in"
      src={logo}
      alt={title}
      className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
    />
    <h3 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 transition duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
      {title}
    </h3>
  </div>
);

const Certificates = () => {
  return (
    <section id="certificates">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Certificates
      </h1>
      <motion.div
        className={layout.sectionReverse}
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {certificates.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
