import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Chef = () => {
  const [chefinfo, setChefinfo] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setChefinfo(data));
  }, []);

  return (
    <div ref={ref}>
    <motion.div
         initial="hidden"
         animate={inView ? "visible" : "hidden"} // Use inView to control the animation
         variants={variants}
         transition={{ duration: 1.5 }}
    >
    <div className="mt-4">
      <div className="text-center space-y-4">
        <h3 className="text-5xl py-4">Meet Our Expert Chefs</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {
        chefinfo.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))
        }
      </div>
    </div>
    </motion.div>
    </div>
  );
};

export default Chef;
