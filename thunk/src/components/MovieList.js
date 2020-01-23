import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';
import Loader from 'react-loader-spinner';

// components
import Movie from './Movie';


const MovieList = (props) => {
    return (
        <div>
            <button onClick={props.fetchMovies}>Find Movies</button>
            {!props.films && !props.isLoading && (
                <h2>Click the 'Find Movies' button to generate a list of movies.</h2>
            )}
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            )}
            {props.films && !props.isLoading && props.films.map((movie) => {
                return <Movie movie={movie} key={movie.id} />
            })}
        </div>
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