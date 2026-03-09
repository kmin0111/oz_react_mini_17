import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const imageUrl = "https://image.tmdb.org/t/p/w500";

const MovieCardContainer = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: black;
  color: white;
  padding: 10px;
  cursor: pointer;
`;

export const Card = ({ title, posterPath, voteAverage }) => {
  const navigate = useNavigate();

  return (
    <MovieCardContainer onClick={() => navigate("/details")}>
      <img
        style={{ width: `100%`, height: `auto`, display: `block` }}
        src={imageUrl + posterPath}
        alt={title}
      />
      <h4 style={{ margin: "10px 0" }}>{title}</h4>
      <span style={{ fontSize: `15px` }}>평점: {voteAverage}</span>
    </MovieCardContainer>
  );
};
