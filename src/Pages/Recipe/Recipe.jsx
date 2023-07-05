import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  const [chefinfo, setChefinfo] = useState([]);

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
    <div>
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
     
    </div>
  );
};

export default Recipe;
