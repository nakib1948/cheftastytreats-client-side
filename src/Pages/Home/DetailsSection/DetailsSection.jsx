import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsersLine,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import chefImg from "../../../assets/icons8-chef-64.png";
import bg2 from "../../../assets/bg2.jpg";

const DetailsSection = () => {
  const [countOn, setCountOn] = useState(false);
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
    <ScrollTrigger onEnter={() => setCountOn(true)}>
      <div
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-16 mb-20 relative
        px-5 py-28
      "
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius:'25px'
        }}
      >
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-black opacity-40"
            style={{ position: "absolute" }}
          ></div>
        </div>
        <div className="bg-[#372848]  text-center border-4 border-indigo-500/75 rounded-full p-20 "
        >
          <FontAwesomeIcon
            icon={faUser}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
          <h1 className="my-2 text-2xl">
            <CountUp
              className="text-2xl ..."
              start={0}
              end={85000}
              duration={4}
              delay={0}
            />{" "}
            +
          </h1>
          <p className="text-3xl ">Customer Serve</p>
        </div>

        <div className="bg-[#372848] text-center border-4 border-indigo-500/75 rounded-full p-20 flex flex-col items-center">
          <img src={chefImg} alt="" className="mx-auto " />
          <h1 className="my-2 text-2xl">
            <CountUp
              className="text-2xl ..."
              start={0}
              end={120}
              duration={4}
              delay={0}
            />{" "}
            +
          </h1>
          <p className="text-3xl">Experience Chef</p>
        </div>

        <div className="bg-[#372848] text-center border-4 border-indigo-500/75 rounded-full p-20">
          <FontAwesomeIcon icon={faUsersLine} size="2xl" />
          <h1 className="my-2 text-2xl">
            <CountUp
              className="text-2xl ..."
              start={0}
              end={72000}
              duration={4}
              delay={0}
            />{" "}
            +
          </h1>
          <p className="text-3xl">Happy Customer</p>
        </div>

        <div className="bg-[#372848] text-center border-4 border-indigo-500/75 rounded-full p-20">
          <FontAwesomeIcon
            icon={faTrophy}
            size="2xl"
            style={{
              "--fa-primary-color": "#031026",
              "--fa-secondary-color": "#031026",
            }}
          />
          <h1 className="my-2 text-2xl">
            <CountUp
              className="text-2xl ..."
              start={0}
              end={30}
              duration={4}
              delay={0}
            />{" "}
            +
          </h1>
          <p className="text-3xl ">Winning Award</p>
        </div>
      </div>
    </ScrollTrigger>
    </motion.div>
    </div>
  );
};

export default DetailsSection;
