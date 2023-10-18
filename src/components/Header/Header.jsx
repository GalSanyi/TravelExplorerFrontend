import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../cotext/AuthContext";
import "./header.css";

const nav_link = [
  {
    name: "Home",
    display: "/home",
  },
  {
    name: "About",
    display: "/about",
  },
  {
    name: "Tours",
    display: "/tours",
  },
];

const Header = () => {
  const headerRef = useRef("");
  const menuRef = useRef("");
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const stickyHeaderFun = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFun();
    return () => window.removeEventListener("scroll", stickyHeaderFun);
  }, []);
  const menuToggle = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ===Logo====== */}
            <div className="logo">
              <img src={logo} alt="логотип" />
            </div>
            {/* ===Logo eng====*/}
            {/* ===start menu====== */}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_link.map((item, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <NavLink
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                        to={item.display}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* ===end menu====== */}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logOut}>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile__menu" onClick={menuToggle}>
                <span className="ri-menu-line"></span>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
