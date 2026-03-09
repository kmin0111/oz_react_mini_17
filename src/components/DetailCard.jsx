import styled from "styled-components";
import { useState } from "react";
import detailData from "../../movieDetailData.json";

const imageUrl = "https://image.tmdb.org/t/p/w500";

const DetailCardContainer = styled.section`
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
  background-color: black;
  color: white;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  flex: 1;
`;

const PosterImage = styled.img`
  width: 400px;
  display: block;
`;

export const DetailCard = () => {
  const [movie] = useState(detailData);
  const genreNames = movie.genres.map((g) => g.name).join("/ ");

  return (
    <DetailCardContainer>
      <PosterImage src={imageUrl + movie.poster_path} alt={movie.title} />
      <Info>
        <h1 style={{ margin: 0, fontSize: `40px` }}>{movie.title}</h1>
        <h3 style={{ fontSize: `24px` }}>평점: {movie.vote_average}</h3>
        <h3 style={{ fontSize: `24px` }}>장르: {genreNames}</h3>
        <p style={{ fontSize: `18px`, lineHeight: "1.5" }}>{movie.overview}</p>
      </Info>
    </DetailCardContainer>
  );
};
