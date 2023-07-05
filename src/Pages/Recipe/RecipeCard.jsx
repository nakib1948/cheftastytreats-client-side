import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke, faHeart } from '@fortawesome/free-solid-svg-icons';
const RecipeCard = ({ recipe }) => {
  const { img, recipe_name, ingredients, cooking_method,rating } = recipe;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <div className="card-actions">
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          style={{ color: "#e7d404" }}
        />
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          style={{ color: "#e7d404" }}
        />
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          style={{ color: "#e7d404" }}
        />
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          style={{ color: "#e7d404" }}
        />
        <FontAwesomeIcon
          icon={faStarHalfStroke}
          size="lg"
          style={{ color: "#f5e105" }}
        />
        <p>{rating}</p>
        </div>
        <p> <b>Ingredients:</b>  {ingredients}.</p>
        <p><b>Methods: </b>{cooking_method}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><FontAwesomeIcon icon={faHeart} shake size="lg" />Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
