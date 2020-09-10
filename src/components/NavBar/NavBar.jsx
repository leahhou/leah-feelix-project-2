import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import { Navigation, MYOBLogo } from "@myob/myob-widgets";

const NavBar = props => {
  const brand = (
    <Navigation.Brand url="#Dashboard" width="73px">
      <MYOBLogo />
    </Navigation.Brand>
  );


  const primary = [
    <Navigation.Link key="home" label="Contacts" url="#Home" active className={[styles.nav, styles.override]}/>,
    <Navigation.Link key="" onSelect={() => "selected"} label="Create Contact" className={[styles.nav, styles.override]}/>
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
