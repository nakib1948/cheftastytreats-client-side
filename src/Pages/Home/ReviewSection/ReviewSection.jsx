import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import man1 from "../../../assets/man-1.jpg";
import man2 from "../../../assets/man-2.jpg";
import man3 from "../../../assets/man-3.jpg";
import woman1 from "../../../assets/woman-1.jpg";
import woman2 from "../../../assets/woman-2.jpg";
import woman3 from "../../../assets/woman-3.jpg";
import testimonial from "../../../assets/testimonials.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReviewSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value as needed
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint value as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div ref={ref}>
      {inView && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2 }}
        >
          <img src={testimonial} alt="" />
          <h1 className="text-3xl font-bold py-4">Our Customer Feedbacks</h1>
          <Slider {...settings} className="mb-20">
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img className="rounded-lg h-28" src={man1} alt="Slide 1" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Adam Thompson</h2>
                  <small>NYC USA</small>
                  <p>
                    "I tried the chicken Parmesan recipe, and it was absolutely
                    delicious! The combination of crispy breaded chicken, tangy
                    marinara sauce, and melted cheese was heavenly. Definitely a
                    must-try for Italian food lovers!"
                  </p>
                  <div className="card-actions">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      size="2xl"
                      style={{ color: "#f5e105" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-full  h-28"
                    src={man2}
                    alt="Slide 1"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Ethan Ramirez</h2>
                  <small>NYC USA</small>
                  <p>
                    "I recently made the shrimp stir-fry recipe from this
                    website, and it turned out fantastic! The flavors were
                    well-balanced, and the dish came together quickly. I
                    appreciate the clear instructions provided, making it easy
                    for even a beginner like me to succeed."
                  </p>
                  <div className="card-actions">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      size="2xl"
                      style={{ color: "#f5e105" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-full  h-28"
                    src={man3}
                    alt="Slide 1"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Benjamin Patel</h2>
                  <small>NYC USA</small>
                  <p>
                    "I'm a fan of spicy food, so I decided to try the chili con
                    carne recipe. It exceeded my expectations! The blend of
                    spices was perfect, giving the dish a rich and robust
                    flavor. I've already shared the recipe with my friends who
                    love a good chili!"
                  </p>
                  <div className="card-actions">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      size="2xl"
                      style={{ color: "#f5e105" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-full  h-28"
                    src={woman1}
                    alt="Slide 2"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Olivia Anderson</h2>
                  <small>NYC USA</small>
                  <p>
                    "The vegetarian lasagna recipe on this website is a winner!
                    The layers of pasta, veggies, and creamy cheese sauce were a
                    delightful combination. It was a hit with both my family and
                    guests. I'll definitely be returning to this site for more
                    flavorful vegetarian recipes."
                  </p>
                  <div className="card-actions">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-full  h-28"
                    src={woman2}
                    alt="Slide 2"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Sophia Nguyen</h2>
                  <small>NYC USA</small>
                  <p>
                    "I tried the Thai green curry recipe, and it transported me
                    straight to Thailand! The balance of aromatic herbs, coconut
                    milk, and spices was spot on. The recipe was easy to follow,
                    and the end result was a restaurant-quality curry that I'll
                    be making again and again."
                  </p>
                  <div className="card-actions">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      size="2xl"
                      style={{ color: "#f5e105" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    className="rounded-full  h-28"
                    src={woman3}
                    alt="Slide 3"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Emma Wilson</h2>
                  <small>NYC USA</small>
                  <p>
                    "I made the chocolate lava cakes for a special occasion, and
                    they were a showstopper! The gooey molten center encased in
                    a perfectly baked chocolate cake was pure indulgence. The
                    recipe was foolproof, and the cakes turned out just as
                    decadent as I had hoped. A definite crowd-pleaser!"
                  </p>
                  <div className="card-actions">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      size="2xl"
                      style={{ color: "#e7d404" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalfStroke}
                      size="2xl"
                      style={{ color: "#f5e105" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </motion.div>
      )}
    </div>
  );
};

export default ReviewSection;
