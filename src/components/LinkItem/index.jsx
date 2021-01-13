import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";

function LinkItem(props) {
  const { nameOfClass, text, iconsClass, to, withIcon, handleLogout } = props;
  return (
    <>
      <li className={nameOfClass}>
        {withIcon && text !== 'Logout' ? (
          <i className={`fas ${iconsClass}`} />
				) : (
  <button onClick={handleLogout} type='button' className={`${nameOfClass} logout-button`}>
    <i className={`fas ${iconsClass}`} />
    Logout
  </button>
				)}
        {text !== 'Logout' ? <Link to={`/${to}`}>{text}</Link>:null}
      </li>
    </>
	);
}

LinkItem.propTypes = {
	nameOfClass: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	iconsClass: PropTypes.string,
	to: PropTypes.string.isRequired,
	withIcon: PropTypes.bool.isRequired,
	handleLogout:PropTypes.func
};

LinkItem.defaultProps = {
	iconsClass: '',
	handleLogout:''
};
export default LinkItem;
