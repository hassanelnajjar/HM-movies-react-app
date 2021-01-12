import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getMovies, saveMovies, removeMovie } from "../../utils/localStorage";
import Header from "../Headers/index";
import MovieCard from "../MovieCard";
import SideNav from "../SideNav";
import Options from "../Options";
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
  }

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleDeleteMovie = (movieId) => {
    const movies = removeMovie(movieId);
    this.setState({ movies });
  };

  handleSubmit = (event) => {
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

  render() {
    const { show, movies } = this.state;
    return (
      <div className="Layout">
        <Header />
        <div className="main-content">
          <SideNav />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/movies"
              render={(props) => {
                return (
                  <div className="MovieContainer">
                    <Options handleSubmit={this.handleSubmit} />
                    {movies.map((movie) => (
                      <MovieCard
                        handleDeleteMovie={this.handleDeleteMovie}
                        movieId={movie.movieId}
                        styleType="style2"
                        imgUrl={movie.imgUrl}
                        watched={movie.watched}
                        title={movie.title}
                        description={movie.description}
                        imgTitle={movie.imgTitle}
                        likes={movie.likes}
                        released={movie.released}
                        {...props}
                      />
                    ))}
                  </div>
                );
              }}
            />
            <Redirect to="/movies" />
          </Switch>
        </div>
        <div>{show}</div>
      </div>
    );
  }
}
