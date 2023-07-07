import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Recipe = () => {
  const [chefinfo, setChefinfo] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const recipe = useLoaderData();
  console.log(recipe)
  const param = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then(async (data) => {
        const currentChef = await data.filter((data) => data.id == param.id);
        setChefinfo(currentChef);
        console.log(chefinfo)
      });
  }, []);

  return (
    <div ref={ref}>
    <motion.div
         initial="hidden"
         animate={inView ? "visible" : "hidden"} // Use inView to control the animation
         variants={variants}
         transition={{ duration: 1.5 }}
    >
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {chefinfo.length > 0 ? (
            <>
              <img
                src={chefinfo[0].picture}
                className="max-w-sm h-auto rounded-lg shadow-2xl"
              />
              <div className="text-center">
                <h1 className="text-5xl font-bold">Chef {chefinfo[0].name}</h1>
                <p className="py-6 text-xl" >{chefinfo[0].bio}</p>
               
              </div>
            </>
          ) : (
            <><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></>
          )}
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
            {
                recipe.map(recipe=> <RecipeCard recipe={recipe}></RecipeCard> )
            }

       </div>
     </motion.div>
    </div>
  );
};

export default Recipe;
