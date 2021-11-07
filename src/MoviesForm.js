import { useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
const MoviesForm = (props) => {
  const [movie, setMovie] = useState({
    name: "",
    poster: "",
    summary: "",
    rating: "",
  });
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.getMovies(movie);
        }}
      >
        <TextField
          variant="filled"
          placeholder="Enter Movie Name"
          onChange={(event) => {
            setMovie((state) => ({
              ...state,
              name: event.target.value,
            }));
          }}
        />
        <TextField
          variant="filled"
          placeholder="Enter poster URL"
          onChange={(event) => {
            setMovie((state) => ({
              ...state,
              poster: event.target.value,
            }));
          }}
        />
        <TextField
          variant="filled"
          placeholder="Enter Movie Summary"
          onChange={(event) => {
            setMovie((state) => ({
              ...state,
              summary: event.target.value,
            }));
          }}
        />
        <TextField
          variant="filled"
          placeholder="Enter Movie Rating"
          onChange={(event) => {
            setMovie((state) => ({
              ...state,
              rating: event.target.value,
            }));
          }}
        />
        <Button variant="contained" type="submit">
          Add Movie
        </Button>
      </form>
    </>
  );
};

export default MoviesForm;
