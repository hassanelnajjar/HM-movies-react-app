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
  nameOfClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconsClass: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  withIcon: PropTypes.bool.isRequired,
};
export default LinkItem;
