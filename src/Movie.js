const Movie = ({ name, poster, summary, rating }) => {
  return (
    <div>
      <p>
        <b>Movie Name: </b>
        {name}
      </p>
      <p>
        <img height="200" alt={name} src={poster} />
      </p>
      <p>
        <b>Movie Summary: </b>
        {summary}
      </p>
      <p>
        <b>Movie Rating: </b>
        {rating}
      </p>
      <p>----------------------------------------------------------------</p>
    </div>
  );
};

export default Movie;
