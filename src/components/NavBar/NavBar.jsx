import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import { Navigation, MYOBLogo } from "@myob/myob-widgets";

const NavBar = props => {
  const brand = (
    <Navigation.Brand url="/home" width="73px">
      <MYOBLogo />
    </Navigation.Brand>
  );


  const primary = [
    <Navigation.Link key="home" label="Contacts" url="/"  className={`${styles.nav} ${styles.override}`}/>,
    <Navigation.Link key="" url="/new" onSelect={() => "selected"} label="Create Contact" className={`${styles.nav} ${styles.override}`}/>
  ];


  return (
    <>
      <Navigation
        fluid
        brand={brand}
        primary={primary}
      />
    </>
  );
};

Navigation.propTypes = {};

export default NavBar;
