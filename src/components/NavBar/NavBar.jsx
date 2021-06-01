import React from "react";
import PropTypes from "prop-types";
import { Navigation, MYOBLogo } from "@myob/myob-widgets";

const NavBar = (navs, ...props) => {
  const brand = (
    <Navigation.Brand url="/" width="73px">
      <MYOBLogo />
    </Navigation.Brand>
  );
  const {key:key1, label:label1, url:url1} = navs.navs[0];
  const {key:key2, label:label2, url:url2, onSelect} = navs.navs[1];
  const primary = [
    <Navigation.Link active key={key1} label={label1} url={url1}/>,
    <Navigation.Link
    key={key2} label={label2} url={url2} onSelect={onSelect}
    />
  ];

  return (
    <>
      <Navigation fluid brand={brand} primary={primary} />
    </>
  );
};

Navigation.propTypes = {
  navs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      onSelect: PropTypes.func
    })
  )
};

export default NavBar;
