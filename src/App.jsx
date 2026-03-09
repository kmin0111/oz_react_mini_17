import { useState } from "react";
import "./App.css";
import movieData from "../movieListData.json";
import { Card } from "./components/MovieCard";
import { Route, Routes } from "react-router-dom";
import { DetailCard } from "./components/DetailCard";
import LayOut from "./components/LayOut";

function App() {
  const [movies, setMovies] = useState(movieData.results);

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route
          index
          element={
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                backgroundColor: `black`,
                gap: `20px`,
                padding: `20px`,
              }}
            >
              {movies.map((movie) => (
                <Card
                  key={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  voteAverage={movie.vote_average}
                />
              ))}
            </div>
          }
        />
        <Route path="/details" element={<DetailCard />} />
      </Route>
    </Routes>
  );
}

export default App;
