import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const imageUrl = "https://image.tmdb.org/t/p/w500";

const MovieCardContainer = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 400px;    
    border: 1px solid gray;
    border-radius: 10px;
    background-color: black; 
    color: white;
    padding: 10px;
`;

export const Card = ({ movie }) => {
    const navigate = useNavigate()
    return (

        <MovieCardContainer onClick={() =>{navigate(`/detail/${movie.id}`);}}>
            <img style={{ width: `100%`, height: `700px`, objectFit: `cover` }} src={imageUrl + movie.poster_path} />
            <h4 style={{ margin: 0 }}>{movie.title}</h4>
            <span style={{ fontSize: `15px` }}>평점:{movie.vote_average}</span>
        </MovieCardContainer>
    )
}