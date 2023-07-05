import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

const ChefCard = ({ chef }) => {
  const { id,name, picture, bio, experience, recipes, likes } = chef;
  const navigate=useNavigate()
 
  const redirectToRecipePage=(id)=>{
     navigate(`recipe/${id}`)
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture}
          alt="Shoes"
          className="w-full h-80"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {
            name
          }
          
        </h2>
        <p>{bio}</p>
        <p> Experience: <strong>{experience} </strong> years </p>
        <div className="card-actions justify-end">
          <div className="badge p-4">
          <FontAwesomeIcon icon={faThumbsUp} size="xl" style={{color: "#10397f",}} />
          <p className='pl-2'>
          {
            likes
          }
          </p>
         
            </div>
          <div className="badge badge-outline p-4"><p> recipes: {recipes}</p></div>
        </div>
      </div>
      <button onClick={()=>redirectToRecipePage(id)} className="btn btn-block btn-primary">View Recipes</button>
    </div>
  );
};

export default ChefCard;
