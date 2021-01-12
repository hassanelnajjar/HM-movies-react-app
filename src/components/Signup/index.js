import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SignUp extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const {
			target: [
				{ value: username },
				{ value: email },
				{ value: password },
				{ value: confirmPassword },
			],
		} = event;
		const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
		const users = [
			{
				username,
				email,
				password,
			},
			...savedUsers,
		];
		localStorage.setItem('users', JSON.stringify(users));
		// this.props.history.push('/login')
	};
  handleUsername = (event)=> {
    const { target:{value}} = event
    this.setState({username:value})
  }
  handleEmail = (event)=> {
    const { target:{value}} = event
    this.setState({email:value})
  }
  handlePassword = (event)=> {
    const { target:{value}} = event
    this.setState({password:value})
  }
  handleConfirmPassword = (event)=> {
    const { target:{value}} = event
    this.setState({confirmPassword:value})
  }


	render() {
    const {confirmPassword,email,password,username} = this.state
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor='username'>User Name</label>
						<input
							type='text'
              id='username'
              value={username}
              onChange={this.handleUsername}
							placeholder='Enter Your user name...'
						/>
					</div>
					<div>
						<label htmlFor='Email'>Email</label>
						<input
							type='email'
							id='username'
              placeholder='Enter Your email...'
              value={email}
              onChange={this.handleEmail}
						/>
					</div>
					<div>
						<label htmlFor='Email'>Password</label>
						<input
							type='Password'
							id='Password'
              placeholder='Enter Your Password...'
              value={password}
              onChange={this.handlePassword}
						/>
					</div>
					<div>
						<label htmlFor='Email'>Confirm Password</label>
						<input
							type='Password'
							id='Password'
              placeholder='Please Confirm Your Password...'
              value={confirmPassword}
              onChange={this.handleConfirmPassword}
						/>
					</div>
					{/* <p>Are You Registered ?... <Link>Login Here !!</Link></p> */}
					<input type='submit' value='Register' />
				</form>
			</>
		);
	}
}
