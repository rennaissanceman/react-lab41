export default function MoviesList(props) {
  return (
    <>
      <h2>Titles</h2>
      <ul>
        {props.movies.map((movie, index) => (
          <li key={`${movie.title}-${movie.year}-${index}`}>
            {movie.title} {movie.year ? `(${movie.year})` : ""}{" "}
            <button
              type="button"
              onClick={() => props.onMovieRemove(index)}
              style={{
                padding: "0.2rem 0.6rem",
                fontSize: "0.7rem",
                height: "auto",
                lineHeight: "1",
              }}
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
