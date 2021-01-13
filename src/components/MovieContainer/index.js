import PropTypes from "prop-types";
import Options from "../Options";
import MovieCard from "../MovieCard";

function MovieContainer(props) {
  const {
    methods: {
      handleWatchedMovies,
      handleSubmit,
      handleDeleteMovie,
      addSortCase,
      addFilterCase,
    },
    showWatchedMovies,
    movies,
    styleType,
  } = props;
  return (
    <div className="MovieContainer">
      <Options
        handleSubmit={handleSubmit}
        addSortCase={addSortCase}
        addFilterCase={addFilterCase}
      />
      {movies
        .filter(({ watched }) => (showWatchedMovies ? watched : !watched))
        .map((movie) => (
          <MovieCard
            methods={{
              handleWatchedMovies,
              handleDeleteMovie,
            }}
            movie={movie}
            styleType={styleType}
            {...props}
          />
        ))}
    </div>
  );
}

MovieContainer.propTypes = {
  styleType: PropTypes.string.isRequired,
  methods: PropTypes.shape({
    handleWatchedMovies: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleDeleteMovie: PropTypes.func.isRequired,
    addSortCase: PropTypes.func.isRequired,
    addFilterCase: PropTypes.func.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  showWatchedMovies: PropTypes.bool.isRequired,
};

export default MovieContainer;
