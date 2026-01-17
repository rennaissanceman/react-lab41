import { useState } from "react";
import "milligram";

export default function App() {
  // ✅ Etap 09: movies w stanie
  const [movies, setMovies] = useState([
    { title: "Wall-E", year: "2008" },
    { title: "Pulp Fiction", year: "1994" },
    { title: "Matrix", year: "1999" },
    { title: "1670", year: "2023" },
  ]);

  // pola formularza
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  function addMovie(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedYear = year.trim();

    if (trimmedTitle.length < 1) {
      return alert("Podaj tytuł filmu");
    }

    const newMovie = { title: trimmedTitle, year: trimmedYear };

    // ✅ Etap 09: nie mutujemy tablicy, tylko tworzymy nową
    setMovies([...movies, newMovie]);

    // reset formularza
    setTitle("");
    setYear("");
  }

  return (
    <div className="container">
      <h1>My favourite movies to watch</h1>

      <h2>Titles</h2>
      <ul>
        {movies.map((movie) => (
          <li key={`${movie.title}-${movie.year}`}>
            {movie.title} {movie.year ? `(${movie.year})` : ""}
          </li>
        ))}
      </ul>

      <h2>Add movie</h2>
      <form onSubmit={addMovie}>
        <div>
          <label>Tytuł</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="np. Interstellar"
          />
        </div>

        <div>
          <label>Rok nagrania</label>
          <input
            type="text"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            placeholder="np. 2014"
          />
        </div>

        <button type="submit">Dodaj film</button>
      </form>
    </div>
  );
}

