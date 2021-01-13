import React, { Component } from "react";
// import PropTypes from 'prop-types';
import "./style.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      showSearchInput: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleShow() {
    this.setState((prevState) => {
      return { showSearchInput: !prevState.showSearchInput };
    });
  }

  handleKeyDown() {
    this.setState((prevState) => {
      return { showSearchInput: !prevState.showSearchInput };
    });
  }

  handleChange(evt) {
    this.setState({ search: evt.target.value });
  }

  render() {
    const { search, showSearchInput } = this.state;
    return (
      <div className="Search">
        <form
          className={`search-form ${
            showSearchInput ? "show-search-input" : "hidden-search-input"
          }`}
        >
          <input
            type="search"
            placeholder="Search movies"
            name="search"
            value={search}
            onChange={this.handleChange}
          />
        </form>
        <i
          className="fas fa-search"
          onClick={this.handleShow}
          role="button"
          tabIndex={0}
          aria-label="menu"
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default Search;
