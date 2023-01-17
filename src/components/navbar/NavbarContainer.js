import { useState, React, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import MyButton from "../UI/MyButton";
import classes from "./NavbarContainer.module.css";
import logo from "../../assets/logo.png";
import { navActions } from "../../redux/navSlice";
import { NAVIGATION } from "../../constants/constants";

const NavbarContainer = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);
  // REDUX STORE
  const dispatch = useDispatch();
  const linksState = useSelector((state) => state.nav.currentPage);

  // checking if viewport is on the top of the screen
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setIsOnTop(true) : setIsOnTop(false);

    return () => (window.onscroll = null);
  });

  // toggle click handler
  const changeToggleStatus = () => {
    setIsToggleActive((status) => !status);
  };

  // conditional styles for elements
  const navbarToggleClassesFirst = isToggleActive
    ? `${classes.toggleIconLineOne} ${classes.rotateLeft}`
    : classes.toggleIconLineOne;

  const navbarToggleClassesSecond = isToggleActive
    ? `${classes.toggleIconLineTwo} ${classes.rotateRight}`
    : classes.toggleIconLineTwo;

  // custom style variables
  const nonActiveStyle = `${classes.links} nav-link`;
  const activeStyle = `${classes.links} nav-link ${classes.active}`;

  // conditional styles for links
  const homeClasses =
    linksState === NAVIGATION.home ? activeStyle : nonActiveStyle;
  const photovoltaicsClasses =
    linksState === "photovoltaics" ? activeStyle : nonActiveStyle;
  const servicesClasses =
    linksState === NAVIGATION.services ? activeStyle : nonActiveStyle;

  const navbarScrollingStyle = isOnTop
    ? classes.navbarContainer
    : `${classes.navbarContainer} ${classes.scrolled}`;

  return (
    <>
      <Navbar sticky="top" expand="lg" className={navbarScrollingStyle}>
        <Container>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
              dispatch(navActions.linkHome());
            }}
          >
            <Navbar.Brand style={{ cursor: "pointer" }}>
              <img src={logo} className={classes.logo} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            className={classes.navbarToggle}
            aria-controls="navbarNavAltMarkup"
            onClick={changeToggleStatus}
          >
            <div className={classes.toggleIcon}>
              <div className={navbarToggleClassesFirst}></div>
              <div className={navbarToggleClassesSecond}></div>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <Link
                to="/"
                className={homeClasses}
                onClick={() => dispatch(navActions.linkHome())}
              >
                <Typography style={{ fontWeight: "bold" }}>Úvod</Typography>
              </Link>

              <Link
                to="/services"
                className={servicesClasses}
                onClick={() => dispatch(navActions.linkServices())}
              >
                <Typography style={{ fontWeight: "bold" }}>Služby</Typography>
              </Link>

              <Link
                to="/photovoltaics"
                onClick={() => dispatch(navActions.linkPhotovoltaics())}
                className={photovoltaicsClasses}
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Fotovoltaika
                </Typography>
              </Link>

              <Link to="/contact">
                <MyButton
                  text="Kontakt"
                  onButtonClick={() => dispatch(navActions.linkContact())}
                />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarContainer;
