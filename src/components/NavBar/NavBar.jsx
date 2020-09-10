import React from "react";
import PropTypes from "prop-types";
import { Navigation, MYOBLogo } from "@myob/myob-widgets";

const NavBar = props => {
  const brand = (
    <Navigation.Brand url="#Dashboard" width="73px">
      <MYOBLogo />
    </Navigation.Brand>
  );


  const primary = [
    <Navigation.Link key="home" label="Contacts" url="#Home" active />,
    <Navigation.Link key="" onSelect={() => "selected"} label="New Contact" />
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
