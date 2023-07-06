import React, { useContext } from "react";
import logo from "../../assets/Cooking-Logo-design-template-vector.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate=useNavigate()
  const signout=()=>{
      logOut()
      navigate('/')
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div>
          <Link to="/">
            <img className="h-24 rounded-full" src={logo} alt="" />
            <p className="text-blue-600">Chef's Tasty Treats</p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <button className="mr-6 btn btn-outline btn-info">
          <ActiveLink to="/">Home</ActiveLink>
        </button>

        <button className="mr-6 btn btn-outline btn-info">
          <ActiveLink to="/blog">Blog</ActiveLink>
        </button>

        {user?.email && (
          <button onClick={()=>signout()} className="mr-6 btn btn-outline btn-info">Logout</button>
        )}
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <img
            className="h-16 rounded-full group hover:tooltip"
            src={user.photoURL}
            alt="User Profile"
            title={user.displayName}
          />
        ) : (
          <button className="btn btn-primary">
            <Link to="login">Login</Link>
            </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
