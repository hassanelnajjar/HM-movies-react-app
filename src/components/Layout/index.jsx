import React, { Component } from 'react';
import Header from '../Headers/index';
import './style.css';

export default class index extends Component {
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
        <div>{show}</div>
      </div>
    );
  }
}
