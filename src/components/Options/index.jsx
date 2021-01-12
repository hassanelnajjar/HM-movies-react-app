import React, { Component } from 'react';
import Sorting from './Sorting/index';
import Search from './Search/index';
import AddMovie from '../AddMovie/index';
import Filtering from './Filtering/index';

import './style.css';

export default class Options extends Component {
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
      <div className="Options">
        <div className="addmovie-section">
          <i
            className="far fa-plus-square"
            onClick={this.handleClick}
            role="button"
            tabIndex={0}
            aria-label="menu"
            onKeyDown={this.handleKeyDown}
          />
          {open && <AddMovie />}
        </div>
        <div className="filter-section">
          <Search />
          <Filtering />
          <Sorting />
        </div>
      </div>
    );
  }
}
