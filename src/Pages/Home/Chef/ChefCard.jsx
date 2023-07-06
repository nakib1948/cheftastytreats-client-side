import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";

import "./Chef.css";
const ChefCard = ({ chef }) => {
  const { id, name, picture, bio, experience, recipes, likes } = chef;
  const navigate = useNavigate();

  const redirectToRecipePage = (id) => {
    navigate(`recipe/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <LazyLoad
            height={320}
            offsetVertical={500}
            debounce={500}
            throttle={200}
          >
            <img src={picture} alt="Shoes" className="w-full h-80" />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{bio}</p>
          <p>
            {" "}
            Experience: <strong>{experience} </strong> years{" "}
          </p>
          <div className="card-actions justify-end">
            <div className="badge p-4">
              <FontAwesomeIcon
                icon={faThumbsUp}
                size="xl"
                style={{ color: "#10397f" }}
              />
              <p className="pl-2">{likes}</p>
            </div>
            <div className="badge badge-outline p-4">
              <p> recipes: {recipes}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => redirectToRecipePage(id)}
          className="btn btn-block btn-primary"
        >
          View Recipes
        </button>
      </div>
    </motion.div>
  );
};

export default ChefCard;
