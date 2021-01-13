import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Backdrop({ onClick, showForm }) {
  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div
      className={`backdrop ${showForm && "by-form"}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
    />,
    document.getElementById("backdrop-hook")
  );
}

export default Backdrop;
