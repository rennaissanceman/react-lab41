import MovieItem from "./MovieItem";

export default function MoviesList(props) {
  return (
    <>
      <h2>Titles</h2>
      <ul>
        {props.movies.map((movie) => (
          <MovieItem key={`${movie.title}-${movie.year}`} movie={movie} />
        ))}
      </ul>
    </>
  );
}
