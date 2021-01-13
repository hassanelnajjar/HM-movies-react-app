import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.css";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      errors: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      history: { push },
    } = this.props;
    const {
      target: [{ value: email }, { value: password }],
    } = event;
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    const isAuth = savedUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (isAuth) {
      this.setState({ errors: false });
      return push("/movies");
    }
    return this.setState({ errors: true });
  };

  handlePassword(event) {
    const {
      target: { value },
    } = event;
    this.setState({ password: value });
  };

  handleShowPassword() {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { email, password, showPassword, errors } = this.state;
    return (
      <div className="login-form-container">
        <h2 className="add-user-header">User Login</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="add-user-input-row">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              placeholder="Enter Your email..."
              value={email}
              onChange={this.handleEmail}
            />
          </div>
          <div className="add-user-input-row">
            <label htmlFor="Email">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="Password"
              placeholder="Enter Your Password..."
              value={password}
              onChange={this.handlePassword}
            />
          </div>
          <div className="add-user-input-row-show-password">
            <input
              type="checkbox"
              id="Password"
              placeholder="Enter Your Password..."
              value={password}
              onChange={this.handleShowPassword}
            />
            <label htmlFor="Email">Show Password</label>
          </div>
          <div className="add-user-input-row-forget-password">
            <Link to="/">Forget Password !!</Link>
          </div>
          <p>
            Do You Have an account?...
            {" "}
            <Link to="/signup">Register Here !!</Link>
          </p>
          {errors ? (
            <p className="login-error">Incorrect User name or password !!</p>
          ) : null}
          <input
            className="submit-login-button"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

export default withRouter(Login);
