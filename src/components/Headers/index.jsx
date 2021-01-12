import React, { Component } from 'react';
import LinkItem from '../LinkItem/index';
import Backdrop from '../Backdrop/index';
import './style.css';

export default class Headers extends Component {
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
      <>
        <div className="Header">
          {open && <Backdrop onClick={this.handleClick} />}
          <div className="Header-logo">
            <h1 className="Header-logo_text">HM</h1>
          </div>
          <div className="Header-userprofile">
            <div
              className="menu-btn"
              onClick={this.handleClick}
              role="button"
              tabIndex="0"
              onKeyDown={this.handleKeyDown}
            >
              <span className="username-text">username</span>
              <img src="" alt="" />
              <i className="fas fa-user" />
              <i className="fas fa-angle-down" />
            </div>
            {open ? (
              <div className={`userprofile-menu ${open && 'fadeIn'}`}>
                <ul className="user-nav-list">
                  <LinkItem
                    nameOfClass="item-link"
                    text="Profile"
                    iconsClass="fa-id-card"
                    to="profile"
                    withIcon
                  />
                  <LinkItem
                    nameOfClass="item-link"
                    text="Setting"
                    iconsClass="fa-cog"
                    to="setting"
                    withIcon
                  />
                  <LinkItem
                    nameOfClass="item-link"
                    text="Logout"
                    iconsClass="fa-sign-out-alt"
                    to="logout"
                    withIcon
                  />
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
