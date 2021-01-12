import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Backdrop from '../../Backdrop/index';
import './style.css';

class Filtering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  handleKeyDown() {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="Filtering">
        {open && <Backdrop onClick={this.handleClick} />}
        <i
          className="fas fa-filter"
          onClick={this.handleClick}
          role="button"
          tabIndex={0}
          aria-label="menu"
          onKeyDown={this.handleKeyDown}
        />
        {open && (
          <div className="card-menu_list">
            <ul>
              <li>Filter By Recommended</li>
              <li>Filter By Watching</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Filtering;
