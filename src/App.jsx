import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/MovieCard";
import Detail from "./components/DetailCard";
import LayOut from "./components/LayOut";
import styled from "styled-components";

const MainStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: black;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`; 
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const safeMovies = data.results.filter((movie) => movie.adult === false);
        setMovies(safeMovies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route
          index
          element={
            <MainStyle>
              {movies.map((movie) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  voteAverage={movie.vote_average}
                />
              ))}
            </MainStyle>
          }
        />
        <Route path="/details/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;