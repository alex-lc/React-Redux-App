import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';


const MovieList = (props) => {
    return (
        <div>
            <h2>Hello from Movie List component.</h2>
            <button onClick={props.fetchMovies}>Find Movies</button>
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