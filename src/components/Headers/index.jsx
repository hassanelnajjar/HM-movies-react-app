import React, { Component } from "react";
import {Link} from 'react-router-dom'
import LinkItem from "../LinkItem/index";
import Backdrop from "../Backdrop/index";
import {isAuthUser,getUserName} from '../../utils/localStorage'
import "./style.css";

class Headers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
		this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleShowHide = this.handleClick.bind(this)
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

	handleShowHide(){
    		this.setState((prevState) => {
					return { open: !prevState.open };
				});
  }

	render() {
		const { open } = this.state;
		const isAuthenticated = isAuthUser();
		return (
  <>
    <div className='Header'>
      {open && <Backdrop onClick={this.handleClick} />}
      <div className='Header-logo'>
        <Link to='/' className='Header-logo-text'>
          <h1 className='Header-logo_text'>HM</h1>
        </Link>
      </div>
      <div className='Header-userprofile'>
        {isAuthenticated && (
        <div
          className='menu-btn'
          onClick={this.handleClick}
          role='button'
          tabIndex={0}
          onKeyDown={this.handleKeyDown}
        >
          <span className='username-text'>{getUserName()}</span>
          <img src='' alt='' />
          <i className='fas fa-user' />
          <i className='fas fa-angle-down' />
        </div>
						)}

        {open ? (
          <div className={`userprofile-menu ${open && 'fadeIn'}`}>
            <ul className='user-nav-list'>
              <LinkItem
                nameOfClass='item-link'
                text='Profile'
                iconsClass='fa-id-card'
                to='profile'
                withIcon
              />
              <LinkItem
                nameOfClass='item-link'
                text='Setting'
                iconsClass='fa-cog'
                to='setting'
                withIcon
              />
              <LinkItem
                nameOfClass='item-link'
                text='Logout'
                iconsClass='fa-sign-out-alt'
                to='logout'
                handleShowHide={this.handleShowHide}
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



export default Headers;