import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export default class Login extends Component {
	state = {
		email: '',
    password: '',
    showPassword:false,
    errors:false
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const {
			target: [{ value: email }, { value: password }],
		} = event;
    const savedUsers = JSON.parse(localStorage.getItem('users'))
    const isAuth = savedUsers.find(user=> user.email === email && user.password === password)
    console.log(isAuth)
    if (isAuth){
        // this.props.history.push('/movies')
        this.setState({errors:false})
        return  console.log('Auth')
    }
    this.setState({errors:true})
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
  
  handleShowPassword = ()=>{
    this.setState((prevState)=>({showPassword:!prevState.showPassword}))
  }

	render() {
		const { email, password,showPassword ,errors} = this.state;
		return (
			<div className='login-form-container'>
				<h2 className='add-user-header'>User Login</h2>
				<form onSubmit={this.handleSubmit} className='login-form'>
					<div className='add-user-input-row'>
						<label htmlFor='Email'>Email</label>
						<input
							type='email'
							id='Email'
							placeholder='Enter Your email...'
							value={email}
							onChange={this.handleEmail}
						/>
					</div>
					<div className='add-user-input-row'>
						<label htmlFor='Email'>Password</label>
						<input
							type={showPassword? 'text':'password'}
							id='Password'
							placeholder='Enter Your Password...'
							value={password}
							onChange={this.handlePassword}
						/>
					</div>
					<div className='add-user-input-row-show-password'>
						<input
							type='checkbox'
							id='Password'
							placeholder='Enter Your Password...'
							value={password}
							onChange={this.handleShowPassword}
						/>
						<label htmlFor='Email'>Show Password</label>
					</div>
					<div className='add-user-input-row-forget-password'>
						<a href=''>Forget Password !!</a>
					</div>
					<p>
						Do You Have an account?... <a>Register Here !!</a>
					</p>
          {errors?  <p className="login-error">Incorrect User name or password !!</p>:null }
					<input
						className='submit-login-button'
						type='submit'
						value='Register'
					/>
				</form>
			</div>
		);
	}
}
