import styled from "styled-components"
import movieData from "../../movieListData.json";


const imageUrl = "https://image.tmdb.org/t/p/w500";
const genreData = {
    28: "액션",
    12: "모험",
    16: "애니메이션",
    35: "코미디",
    80: "범죄",
    99: "다큐멘터리",
    18: "드라마",
    10751: "가족",
    14: "판타지",
    36: "역사",
    27: "공포",
    10402: "음악",
    9648: "미스터리",
    10749: "로맨스",
    878: "SF",
    10770: "TV ,영화",
    53: "스릴러",
    10752: "전쟁",
    37: "서부"
};

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

export const DetailCard = ({ movieId }) => {
    const movie = movieData.results.find((item) => item.id == movieId)
    const genreNames = movie.genre_ids.map((id) => genreData[id]).join('/ ');

    return (
        <DetailCardContainer>
            <PosterImage src={imageUrl + movie.poster_path} alt={movie.title} />
            <Info>
                <h1 style={{ margin: 0 , fontSize:`50px`}}>{movie.title}　<span style={{ fontSize: `30px` }}>{movie.vote_average}</span></h1>
                <h3 style={{fontSize:`30px`, textAlign:`center`}}>{genreNames}</h3>
                <h3 style={{fontSize:`30px`, textAlign:`center`}}>{movie.overview}</h3>

            </Info>
        </DetailCardContainer>
    )
}