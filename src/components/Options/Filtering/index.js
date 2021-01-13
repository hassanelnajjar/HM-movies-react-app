import React, { Component } from "react";
import PropTypes from "prop-types";
import Backdrop from "../../Backdrop/index";
import "./style.css";

class Filtering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      filterby: "recommended",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFilterType = this.handleFilterType.bind(this);
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

  handleFilterType(evt) {
    this.setState(
      (prevState) => {
        return { open: !prevState.open, filterby: evt.target.dataset.filterby };
      },
      () => {
        const { getFilterType } = this.props;
        const { filterby } = this.state;
        getFilterType(filterby);
      }
    );
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
              <li
                onClick={(this.handleClick, this.handleFilterType)}
                role="button"
                data-filterby="recommended"
                tabIndex={0}
                aria-label="Filter By Recommended"
                onKeyDown={this.handleKeyDown}
              >
                Filter By Recommended
              </li>
              <li
                onClick={(this.handleClick, this.handleFilterType)}
                role="button"
                data-filterby="watching"
                tabIndex={0}
                aria-label="Filter By Watching"
                onKeyDown={this.handleKeyDown}
              >
                Filter By Watching
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Filtering.propTypes = {
  getFilterType: PropTypes.func.isRequired,
};

export default Filtering;
