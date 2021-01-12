import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";

function LinkItem(props) {
  const { nameOfClass, text, iconsClass, to, withIcon } = props;
  return (
    <>
      <li className={nameOfClass}>
        {withIcon && <i className={`fas ${iconsClass}`} />}
        <Link to={`/${to}`}>{text}</Link>
      </li>
    </>
  );
}

LinkItem.propTypes = {
  nameOfClass: PropTypes.string,
  text: PropTypes.string,
  iconsClass: PropTypes.string,
  to: PropTypes.string,
  withIcon: PropTypes.bool,
};

LinkItem.defaultProps = {
  nameOfClass: "item-link",
  text: "Home",
  iconsClass: "fa-id-card",
  to: "home",
  withIcon: true,
};

export default LinkItem;
