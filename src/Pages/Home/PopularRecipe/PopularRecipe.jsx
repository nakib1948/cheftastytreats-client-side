import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
const PopularRecipe = () => {
  const recipe = [
    {
      title: "Creamy Garlic Parmesan Chicken",
      date: "June 27, 2023",
      totalTime: "45 minutes",
      image: "https://i.ibb.co/T1Rn7fm/chicken-karahi-7253714-640.jpg",
    },
    {
      title: "Spicy Garlic oily Beef",
      date: "June 28, 2023",
      totalTime: "30 minutes",
      image: "https://i.ibb.co/4Ym0R1q/steak-2272464-640.jpg",
    },
    {
      title: "Lemon Herb Grilled Salmon",
      date:"June 27, 2023",
      totalTime: "25 minutes",
      image: "https://i.ibb.co/xC0pwtn/salmon-518032-640.jpg",
    },
    {
      title: "Roasted Vegetable Quinoa Bowl",
      date: "June 30, 2023",
      totalTime: "40 minutes",
      image: "https://i.ibb.co/z4j8vyp/vegetable-skewer-3317060-640.jpg",
    },
  ];

  return (
    <div className="my-10 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="md:h-[500px] lg:h-[500px] mt-16"
      >
        {recipe.map((recipe) => (
          <SwiperSlide>
            <div className="card lg:card-side bg-[#372848] shadow-xl">
              <figure>
                <img
                  src={recipe.image}
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl">Most Popular recipe of the week!</h2>
                <div className="badge badge-primary badge-lg">recipe</div>
                <p className=" text-4xl">{recipe.title}</p>
                <div className="card-actions">
                  <p className="text-xl"> {recipe.date} -- {recipe.totalTime} cook</p>
                </div>
                <p className="text-base">want to cook? see recipe</p>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularRecipe;
