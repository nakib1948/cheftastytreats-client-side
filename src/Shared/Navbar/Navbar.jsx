import React, { useContext } from "react";
import logo from "../../assets/Cooking-Logo-design-template-vector.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const signout = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="mr-6 btn btn-outline btn-info">
                <ActiveLink to="/">Home</ActiveLink>
              </button>
            </li>
            <li>
              <button className="mr-6 btn btn-outline btn-info">
                <ActiveLink to="/blog">Blog</ActiveLink>
              </button>
            </li>
            <li>
              {user?.email && (
                <button
                  onClick={() => signout()}
                  className="mr-6 btn btn-outline btn-info"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>

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
          <button
            onClick={() => signout()}
            className="mr-6 btn btn-outline btn-info"
          >
            Logout
          </button>
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
