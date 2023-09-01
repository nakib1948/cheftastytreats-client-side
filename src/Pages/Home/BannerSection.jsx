import React from "react";
import Bannerimg from "../../assets/BannerSection.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const BannerSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div ref={ref}>
    <motion.div
         initial="hidden"
         animate={inView ? "visible" : "hidden"} // Use inView to control the animation
         variants={variants}
         transition={{ duration: 1.5 }}
    >
    <div
      className="hero min-h-screen bg-base-200 relative"
      style={{
        backgroundImage: `url(${Bannerimg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="banner-overlay bg-black bg-opacity-70 absolute inset-0 flex justify-center items-center">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
          <img
            src={Bannerimg}
            className="md:max-w-xl sm:max-w-sm lg:max-w-xl rounded-full shadow-2xl mx-4 lg:mx-0 "
            alt="Banner"
          />
          <div className="text-center lg:text-left mx-4 lg:mx-0">
            <h1 className="text-5xl font-bold text-white">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Delight Your Taste Buds",
                  1000,
                  "Enchant Your Palate",
                  1000,
                  "Tickle Your Taste Buds",
                  1000,
                  "Satisfy Your Flavor Cravings"
                ]}
                speed={40}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            
            </h1>
            <p className="py-6 text-white">
              Welcome to the Culinary Haven! Explore Exquisite Chef Recipes and{" "}
              <br /> Master the Art of Gourmet Cooking
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  );
};

export default BannerSection;
