import React from 'react';
import './style.css';

export default function index(props) {
  const { nameOfClass, text, iconsClass, to, withIcon } = props;
  return (
    <>
      <li className={nameOfClass}>
        {withIcon && <i className={`fas ${iconsClass}`} />}
        <a href={`/${to}`}>{text}</a>
      </li>
    </>
  );
}
