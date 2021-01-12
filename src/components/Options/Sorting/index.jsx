import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Backdrop from '../../Backdrop/index';
import './style.css';

class Sorting extends Component {
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
      <div className="Sorting">
        {open && <Backdrop onClick={this.handleClick} />}
        <i
          className="fas fa-sort-alpha-up"
          onClick={this.handleClick}
          role="button"
          tabIndex={0}
          aria-label="menu"
          onKeyDown={this.handleKeyDown}
        />
        {open && (
          <div className="card-menu_list">
            <ul>
              <li>Sort By Date</li>
              <li>Sort By Likes</li>
              <li>Sort By Watched</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Sorting;
