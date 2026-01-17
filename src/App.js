import { useState } from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

export default function App() {
  const [movies, setMovies] = useState([
    { title: "Wall-E", year: "2008" },
    { title: "Pulp Fiction", year: "1994" },
    { title: "Matrix", year: "1999" },
    { title: "1670", year: "2023" },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleMovieSubmit(movie) {
    setMovies([...movies, movie]);
    setIsFormVisible(false); // wygodnie: po dodaniu chowamy formularz
  }

  function handleMovieRemove(indexToRemove) {
    setMovies(movies.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="container">
      <h1>My favourite movies to watch</h1>

      <button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Ukryj formularz" : "Dodaj film"}
      </button>

      {movies.length === 0 ? (
        <p>Brak filmów. Kliknij „Dodaj film”, aby dodać pierwszy.</p>
      ) : (
        <MoviesList movies={movies} onMovieRemove={handleMovieRemove} />
      )}

      {isFormVisible && <MovieForm onMovieSubmit={handleMovieSubmit} />}
    </div>
  );
}

