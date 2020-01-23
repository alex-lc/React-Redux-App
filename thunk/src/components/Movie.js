import React from 'react';

function Movie(props) {

    return (
        <div>
            {/* {console.log(props.movie.title)} */}
            <p>Title: {props.movie.title}</p>
            <p>Director: {props.movie.director}</p>
            <p>Producer: {props.movie.producer}</p>
            <p>Release Date: {props.movie.release_date}</p>
            <p>Description: {props.movie.description}</p>
        </div>
    )
}

export default Movie;