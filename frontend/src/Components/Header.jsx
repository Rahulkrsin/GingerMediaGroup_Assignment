import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaHeadset } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="containerh">
        <div className="logo">
          <h1>
            <Link to="/">Contact Manager</Link>
          </h1>
        </div>
        <div className="search">
          <input className="searchinput" placeholder="Search..."></input>
        </div>
        <div className="list">
          <ul>
            {user ? (
              <li>
                <button
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  <FaSignOutAlt /> Logout
                </button>
                <li>
                  <FaHeadset />
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </li>
            ) : (
              <>
                <li>
                  <FaUser />
                  <Link to="/signup">Register</Link>
                </li>
                <li>
                  <FaSignInAlt />
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <FaHeadset />
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
