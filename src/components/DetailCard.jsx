import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailCardContainer = styled.section`
  width: 80%;
  height: 800px;
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
  gap: 10px;
  flex: 1;
`;

const PosterImage = styled.img`
  width: 600px;
`;
const TitleStyle = styled.h1`
  margin: 0;
  font-size: 50px; 
`;
const Rating = styled.span`
  font-size: 30px;
`;
const Genre = styled.h3`
  font-size: 30px;
  text-align: center;
`;
const Overview = styled.h3`
  font-size: 30px;
  text-align: center;
`;

function Card() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
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
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!movie) return <div>로딩 중...</div>;

  return (
    <DetailCardContainer>
      <PosterImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Info>
      <TitleStyle>{movie.title}</TitleStyle>
      <Rating>평점: {movie.vote_average}</Rating>
      <Genre>{movie.genres.map((g) => g.name).join(", ")}</Genre>
      <Overview>{movie.overview}</Overview>
      </Info>
    </DetailCardContainer>
  );
}

export default Card;