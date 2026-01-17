export default function MovieItem(props) {
  const { title, year } = props.movie;

  return (
    <li>
      {title} {year ? `(${year})` : ""}
    </li>
  );
}
