import PropTypes from 'prop-types';

function MoviesList(props) {
  const { movies, handleChooseMovie } = props;
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="AddMovie-movie-item"
            onClick={(e) => handleChooseMovie(movie.id, e)}
          >
            <p className="movie-original-title">{movie.original_title}</p>
            <img
              className="movie-thumbnail"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie poster"
            />
            <span className="movie-release-year">
              {new Date(movie.release_date).getFullYear()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  handleChooseMovie: PropTypes.func.isRequired,
};

export default MoviesList;
