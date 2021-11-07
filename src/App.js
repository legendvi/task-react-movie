import Movie from "./Movie.js";
import { useState } from "react";
import MoviesForm from "./MoviesForm";
import Button from "@mui/material/Button";
export default function App() {
  const [MoviesList, setMoviesList] = useState([
    {
      name: "Titanic",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      summary:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      rating: "7.8/10",
    },
    {
      name: "Inception",
      poster: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
      summary:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      rating: "78.8/10",
    },
    {
      name: "Dangal",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
      summary:
        "Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.",
      rating: "8.4/10",
    },
    {
      name: "Taare Zameen Par",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png",
      summary:
        "Ishaan is criticised by his parents for his poor academic performance and is sent away to a boarding school. Ram, an art teacher, however, realises he has dyslexia and helps him uncover his potential.",
      rating: "8.4/10",
    },
    {
      name: "Sivaji",
      poster:
        "https://img.etimg.com/thumb/msid-64494016,width-640,resizemode-4,imgsize-155627/sivaji-the-boss.jpg",
      summary:
        "A software engineer arrives in India to serve the nation and invest in the country's welfare. A few corrupt officials and politicians try to stop him while he tries to overcome the obstacles.",
      rating: "7.5/10 ",
    },
  ]);
  const getMovies = (state) => {
    setMoviesList((prevState) => [...prevState, state]);
  };
  const [hideDescription, setHideDescription] = useState(false);
  return (
    <div className="App">
      <MoviesForm getMovies={getMovies} />
      {MoviesList.map((movie) => {
        return (
          <div>
            <Movie
              key={Math.random()}
              name={movie.name}
              poster={movie.poster}
              summary={hideDescription || movie.summary}
              rating={movie.rating}
            />
            <Button
              variant="contained"
              onClick={() => setHideDescription((state) => !state)}
            >
              {hideDescription ? "Show Description" : "Hide description"}
            </Button>
            <Counter />
          </div>
        );
      })}
    </div>
  );
}

const Counter = (props) => {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="App">
      <Button variant="outllined" onClick={() => setLike(like + 1)}>
        👍{like}
      </Button>
      <Button variant="outlined" onClick={() => setDisLike(disLike + 1)}>
        👎{disLike}
      </Button>
    </div>
  );
};
