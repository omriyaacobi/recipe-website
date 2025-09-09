import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo"> Recipes</div>
      <div className="navbar__links">
        <NavLink to="/" end className="nav-link">
          All Recipes
        </NavLink>
        <NavLink to="/breakfast" className="nav-link">
          Breakfast
        </NavLink>
        <NavLink to="/lunch" className="nav-link">
          Lunch
        </NavLink>
        <NavLink to="/dinner" className="nav-link">
          Dinner
        </NavLink>
        <NavLink to="/dessert" className="nav-link">
          Dessert
        </NavLink>
        <NavLink to="/addrecipe" className="nav-link add-btn">
          + Add Recipe
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
