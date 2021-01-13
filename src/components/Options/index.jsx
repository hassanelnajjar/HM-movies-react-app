import React, { Component } from "react";
import PropTypes from "prop-types";
import Sorting from "./Sorting";
import Search from "./Search";
import AddMovie from "../AddMovie";
import Filtering from "./Filtering";
import Backdrop from "../Backdrop";

import "./style.css";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.addSortCase = this.addSortCase.bind(this);
    this.addFilterCase = this.addFilterCase.bind(this);
    this.handleHideAddMovie = this.handleHideAddMovie.bind(this);
    this.getSearchText = this.getSearchText.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }
  
  handleHideAddMovie() {
    this.setState({ open: false});
  }
  
  handleKeyDown() {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }
  
    getSearchText(searchText) {
      const { addSearchText } = this.props;
      addSearchText(searchText);
    }
  
  addFilterCase(sortBy) {
    const { addFilterCase: _addFilterCase } = this.props;
    _addFilterCase(sortBy);
  }
  
  addSortCase(sortBy) {
    const { addSortCase: _addSortCase } = this.props;
    _addSortCase(sortBy);
  }

  render() {
    const { open } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="Options">
        {open && <Backdrop showForm onClick={this.handleClick} />}
        <div className="addmovie-section">
          <i
            className="far fa-plus-square"
            onClick={this.handleClick}
            role="button"
            tabIndex={0}
            aria-label="menu"
            onKeyDown={this.handleKeyDown}
          />
          {open && <AddMovie handleHideAddMovie={this.handleHideAddMovie} handleSubmit={handleSubmit} />}
        </div>
        <div className="filter-section">
          <Search getSearchText={this.getSearchText} />
          <Filtering getFilterType={this.addFilterCase} />
          <Sorting getSortType={this.addSortCase} />
        </div>
      </div>
    );
  }
}
Options.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  addFilterCase: PropTypes.func.isRequired,
  addSortCase: PropTypes.func.isRequired,
  addSearchText: PropTypes.func.isRequired,
};

export default Options;
