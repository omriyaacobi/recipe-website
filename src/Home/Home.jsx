import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Your Recipe Collection</h1>
      <p>
        you are free to reviewe to recipes that have been added or add a new one
      </p>
      <Link to="/AddRecipe">
        <button>Upload New Recipe</button>
      </Link>
    </div>
  );
};

export default Home;
