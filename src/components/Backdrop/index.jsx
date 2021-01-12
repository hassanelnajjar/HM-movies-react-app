import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Backdrop({ onClick }) {
  return ReactDOM.createPortal(
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div
      className="backdrop"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
    />,
    document.getElementById('backdrop-hook')
  );
}

export default Backdrop;
