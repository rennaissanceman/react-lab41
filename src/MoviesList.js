export default function MoviesList(props) {
  return (
    <>
      <h2>Titles</h2>
      <ul>
        {props.movies.map((movie) => (
          <li key={`${movie.title}-${movie.year}`}>
            {movie.title} {movie.year ? `(${movie.year})` : ""}
          </li>
        ))}
      </ul>
    </>
  );
}
