import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

// components
import Movie from './Movie';

const ListContainer = styled.div`
    width: 100%;
    font-family: 'Oswald', sans-serif;

    button {
        border: none;
        border-radius: 0.3rem;
        padding: 1rem;
        background: #BC6A68;
        font-size: 2.5rem;
        font-weight: 200;
        color: #F6EAE5;
        transition: all 300ms;
        margin-bottom: 2rem;

        &:hover {
            transition: background 300ms;
            background: #233047;
            cursor: pointer; 
        }
    }

    h2 {
        font-weight: 300;
        font-size: 1.6rem;
        margin: 2rem 0;
        text-align: center;
    }

    .controls {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;


const MovieList = (props) => {
    return (
        <ListContainer>
            <div class="controls">
                <button onClick={props.fetchMovies}>Find Movies</button>
            </div>
            {!props.films && !props.isLoading && (
                <h2>Click the 'Find Movies' button to generate a list of movies.</h2>
            )}
            {props.isLoading && (
                <Loader
                    type="ThreeDots"
                    color="#81b99a"
                    height={80}
                    width={80}
                    timeout={3000}
                />
            )}
            {props.films && !props.isLoading && props.films.map((movie) => {
                return <Movie movie={movie} key={movie.id} />
            })}
        </ListContainer>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        films: state.films,
        error: state.error
    }
};

export default connect(mapStateToProps, { fetchMovies })(MovieList);