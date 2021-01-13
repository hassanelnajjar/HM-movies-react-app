import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getMovies,
  saveMovies,
  removeMovie,
  watchedMovies,
  unRegisterUser,
} from "../../utils/localStorage";
import Header from "../Headers";
import About from "../About";
import Contact from "../Contact";
import MovieContainer from "../MovieContainer";
import SideNav from "../SideNav";

import Home from '../Home'
import Login from "../Login";
import SignUp from "../Signup";
import "./style.css";

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true,
			movies: getMovies(),
			isAuthenticated: false,
		};
		this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
		this.handleWatchedMovies = this.handleWatchedMovies.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addSortCase = this.addSortCase.bind(this);
		this.addFilterCase = this.addFilterCase.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	componentDidMount() {
		this.setState({ movies: getMovies() });
	}

	handleAuthentication() {
		this.setState({ isAuthenticated: true });
	}

	handleDeleteMovie(movieId) {
		const movies = removeMovie(movieId);
		this.setState({ movies });
	}

	handleWatchedMovies(movieId) {
		const movies = watchedMovies(movieId);
		this.setState({ movies });
	}

	handleSubmit(event) {
		event.preventDefault();
		const {
			target: [
				{ value: title },
				{ value: description },
				{ value: imgUrl },
				{ values: likes },
			],
		} = event;
		const movies = saveMovies({ title, description, imgUrl, likes });
		this.setState({ movies });
	}

	handleLogout() {
		const {history:{push}} = this.props
		unRegisterUser();
		this.setState({ isAuthenticated: false });
		return push('/');
		
	}

	addSortCase(sortBy) {
		const { movies } = this.state;
		switch (sortBy) {
			case 'alphabetical-ascending':
				this.setState({
					movies: movies.sort((a, b) => {
						if (a.title < b.title) {
							return -1;
						}
						if (a.title > b.title) {
							return 1;
						}
						return 0;
					}),
				});
				break;
			case 'alphabetical-dscending':
				this.setState({
					movies: movies.sort((a, b) => {
						if (a.title < b.title) {
							return 1;
						}
						if (a.title > b.title) {
							return -1;
						}
						return 0;
					}),
				});
				break;
			default:
				this.setState({ movies });
				break;
		}
	}

	addFilterCase() {
		this.setState({ movies: [] });
	}

	render() {
		const { show, movies, isAuthenticated } = this.state;
		return (
  <div className='Layout'>
    <Header handleLogout={this.handleLogout} />
    <div className='main-content'>
      <SideNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route
          exact
          path='/login'
          render={(props) => (
            <Login
              isAuthenticated={isAuthenticated}
              handleAuthentication={this.handleAuthentication}
              {...props}
            />
							)}
        />
        <Route
          exact
          path='/signup'
          render={(props) => (
            <SignUp
              isAuthenticated={isAuthenticated}
              {...props}
              handleAuthentication={this.handleAuthentication}
            />
							)}
        />
        {isAuthenticated &&
							[
								{
									route: '/movies',
									showWatchedMovies: false,
									styleType: 'style2',
								},
								{
									route: '/watched',
									showWatchedMovies: true,
									styleType: 'style1',
								},
							].map((el) => (
  <Route
    exact
    path={el.route}
    render={(props) => {
										return (
  <MovieContainer
    styleType={el.styleType}
    showWatchedMovies={el.showWatchedMovies}
    movies={movies}
    methods={{
													handleWatchedMovies: this.handleWatchedMovies,
													handleSubmit: this.handleSubmit,
													handleDeleteMovie: this.handleDeleteMovie,
													addSortCase: this.addSortCase,
													addFilterCase: this.addFilterCase,
												}}
    {...props}
  />
										);
									}}
  />
							))}
        <Redirect to='/movies' />
      </Switch>
    </div>
    <div>{show}</div>
  </div>
		);
	}
}

Layout.propTypes = {
	history:PropTypes.shape({
		push:PropTypes.func.isRequired
	}).isRequired
}
export default withRouter(Layout);