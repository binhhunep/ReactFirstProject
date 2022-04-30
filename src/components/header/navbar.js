import React from "react";
import logo from "../../images/logo.png";
import "../../styles/header/navbar.scss";
import { FaBeer } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import "bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="navbar-logo" src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  className={(isActive) =>
                    "nav-link" + (!isActive ? " unselected" : "")
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GALLERY
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{
                    backgroundColor: "rgba(5, 5, 5, 0.5)",
                    backdropFilterr: " blur(1px)",
                  }}
                >
                  <li style={{ fontFamily: "cursive", fontSize: "1vmax" }}>
                    <NavLink
                      exact
                      style={{
                        width: "100%",
                        color: "black",
                        textAlign: "center",
                        color: "white",
                      }}
                      to="/Login"
                      className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li
                    style={{
                      fontFamily: "cursive",
                      fontSize: "1vmax",
                    }}
                  >
                    <NavLink
                      exact
                      style={{
                        width: "100%",
                        color: "white",
                        textAlign: "center",
                      }}
                      to="/ToDo"
                      className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                      }
                    >
                      ToDo
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/User"
                  exact
                  className={(isActive) =>
                    "nav-link" + (!isActive ? " unselected" : "")
                  }
                >
                  USER
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="form-logo">
                <BsSearch style={{ color: "black", cursor: "pointer" }} />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
