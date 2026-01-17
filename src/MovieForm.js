import { useState } from "react";

export default function MovieForm(props) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  function addMovie(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedYear = year.trim();

    if (trimmedTitle.length < 1) {
      return alert("Podaj tytuł filmu");
    }

    // 👇 komunikacja dziecko -> rodzic (App)
    props.onMovieSubmit({ title: trimmedTitle, year: trimmedYear });

    setTitle("");
    setYear("");
  }

  return (
    <form onSubmit={addMovie}>
      <h2>Add movie</h2>

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
  );
}
