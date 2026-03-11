import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieCardContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #202020;
  color: white;
  padding: 10px;
`;

function MovieCard({ id, title, posterPath, voteAverage }) {
  const navigate = useNavigate();

  return (
    <MovieCardContainer onClick={() => navigate(`/details/${id}`)}>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <p>평점: {voteAverage}</p>
    </MovieCardContainer>
  );
}

export default MovieCard;