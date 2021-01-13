import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      history: { push },
    } = this.props;
    const {
      target: [
        { value: username },
        { value: email },
        { value: password },
        { value: confirmPassword },
      ],
    } = event;

    if (
      username.trim() ||
      email.trim() ||
      password.trim() ||
      confirmPassword.trim()
    ) {
      return this.setState({ errors: "You have to fill all fields .." });
    }

    if (password !== confirmPassword) {
      return this.setState({ errors: "Your Passwords should be identical" });
    }
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const users = [
      {
        username,
        email,
        password,
      },
      ...savedUsers,
    ];

    localStorage.setItem("users", JSON.stringify(users));

    return push("/login");
  };

  handleUsername = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ username: value });
  };

  handleEmail = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ email: value });
  };

  handlePassword = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ password: value });
  };

  handleConfirmPassword = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ confirmPassword: value });
  };

  render() {
    const { confirmPassword, email, password, username, errors } = this.state;
    return (
      <div className="signup-form-container">
        <h2 className="add-user-header">Create New User</h2>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="add-movie-input-row">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={this.handleUsername}
              placeholder="Enter Your user name..."
            />
          </div>
          <div className="add-movie-input-row">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="username"
              placeholder="Enter Your email..."
              value={email}
              onChange={this.handleEmail}
            />
          </div>
          <div className="add-movie-input-row">
            <label htmlFor="Email">Password</label>
            <input
              type="Password"
              id="Password"
              placeholder="Enter Your Password..."
              value={password}
              onChange={this.handlePassword}
            />
          </div>
          <div className="add-movie-input-row">
            <label htmlFor="Email">Confirm Password</label>
            <input
              type="Password"
              id="Password"
              placeholder="Please Confirm Your Password..."
              value={confirmPassword}
              onChange={this.handleConfirmPassword}
            />
          </div>
          <p>
            Are You Registered ?...
            <Link to="/login">Login Here !!</Link>
          </p>
          {errors ? <p className="signup-error">{errors}</p> : null}
          <input
            className="submit-signup-button"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
