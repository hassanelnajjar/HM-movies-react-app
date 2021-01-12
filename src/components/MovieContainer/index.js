import Options from "../Options";
import MovieCard from "../MovieCard";

export default function MovieContainer(props) {
  const {
    methods: { handleWatchedMovies, handleSubmit, handleDeleteMovie },
    showWatchedMovies,
    movies,
  } = props;
  return (
    <div className="MovieContainer">
      <Options handleSubmit={handleSubmit} />
      {movies
        .filter(({ watched }) => (showWatchedMovies ? watched : !watched))
        .map((movie) => (
          <MovieCard
            methods={{
              handleWatchedMovies,
              handleDeleteMovie,
            }}
            movie={movie}
            styleType="style2"
            {...props}
          />
        ))}
    </div>
  );
}
