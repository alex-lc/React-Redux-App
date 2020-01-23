import React from 'react';
import styled from 'styled-components';

const MovieCard = styled.div`
    background: #F6EAE5;
    padding: 2rem;
    width: 100%;
    border-radius: 0.5rem;
    margin: 3rem 0;
    box-shadow: 0 1px 2px 0 #444444;
    font-size: 1.6rem;
    font-weight: 300;

    p {
        margin: 1rem 0;
        line-height: 3.2rem;

        &:first-child {
            font-weight: 700;
        }
    }
`;

function Movie(props) {

    return (
        <MovieCard>
            {/* {console.log(props.movie.title)} */}
            <p>Title: {props.movie.title}</p>
            <p>Director: {props.movie.director}</p>
            <p>Producer: {props.movie.producer}</p>
            <p>Release Date: {props.movie.release_date}</p>
            <p>Description: {props.movie.description}</p>
        </MovieCard>
    )
}

export default Movie;