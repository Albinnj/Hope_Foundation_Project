// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from "../../assets/images/Header-logo.jpg";

import { useAuth0 } from "@auth0/auth0-react";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "Courses",
    url: "#courses",
  },
  {
    display: "About",
    url: "#about",
  },
];

const Header = () => {
  const menuRef = useRef();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img
                  style={{ width: "100%", paddingTop: "7px" }}
                  src={logo}
                  alt=""
                />{" "}
              </a>
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav_list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav_item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            {
              <div className="nav_right">
                <p className="mb-0 d-flex align-items-center gap-2"></p>
                <button
                  onClick={async () => await loginWithRedirect()}
                  className="btn-sign_in"
                >
                  SIGN IN
                </button>
              </div>
            }
          </div>

          <div className="mobile_menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
