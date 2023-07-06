import React from "react";
import Bannerimg from "../../assets/BannerSection.jpg";

const BannerSection = () => {
  return (
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
            className="max-w-xl rounded-full shadow-2xl mx-4 lg:mx-0 "
            alt="Banner"
          />
          <div className="text-center lg:text-left mx-4 lg:mx-0">
            <h1 className="text-5xl font-bold text-white">Delight Your Taste Buds</h1>
            <p className="py-6 text-white">
            Welcome to the Culinary Haven! Explore Exquisite Chef Recipes and <br /> Master the Art of Gourmet Cooking
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
