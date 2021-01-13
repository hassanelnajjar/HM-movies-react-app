import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getMovies,
  saveMovies,
  removeMovie,
  watchedMovies,
} from "../../utils/localStorage";
import Header from "../Headers";
import About from "../About";
import Contact from "../Contact";
import MovieContainer from "../MovieContainer";
import SideNav from "../SideNav";

import Login from "../Login";
import SignUp from "../Signup";
import "./style.css";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      movies: getMovies(),
    };
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.handleWatchedMovies = this.handleWatchedMovies.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addSortCase = this.addSortCase.bind(this);
    this.addFilterCase = this.addFilterCase.bind(this);
  }

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleDeleteMovie(movieId) {
    const movies = removeMovie(movieId);
    this.setState({ movies });
  };

  handleWatchedMovies (movieId) {
    const movies = watchedMovies(movieId);
    this.setState({ movies });
  };

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
  };

  addSortCase(sortBy) {
    const { movies } = this.state;
    switch (sortBy) {
      case "alphabetical-ascending":
        this.setState({movies: movies.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })});
        break;
      case "alphabetical-dscending":
        this.setState({movies: movies.sort((a, b) => {
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          return 0;
        })});
        break;
      default:
        this.setState({ movies });
        break;
    }
  };

  addFilterCase() {
    this.setState({movies: []});
  };

  render() {
    const { show, movies } = this.state;
    return (
      <div className="Layout">
        <Header />
        <div className="main-content">
          <SideNav />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            {[
              {
                route: "/movies",
                showWatchedMovies: false,
                styleType: "style2",
              },
              {
                route: "/watched",
                showWatchedMovies: true,
                styleType: "style1",
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
            <Redirect to="/movies" />
          </Switch>
        </div>
        <div>{show}</div>
      </div>
    );
  }
}
