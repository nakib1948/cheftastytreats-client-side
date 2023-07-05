import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chef = () => {
  const [chefinfo, setChefinfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setChefinfo(data));
  }, []);

  return (
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
  );
};

export default Chef;
