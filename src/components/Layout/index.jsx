import React, { Component } from 'react';
import Header from '../Headers/index';
import SideNav from '../SideNav/index';
import './style.css';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    const { show } = this.state;
    return (
      <div className="Layout">
        <Header />
        <div className="main-content">
          <SideNav />
        </div>
        <div>{show}</div>
      </div>
    );
  }
}
