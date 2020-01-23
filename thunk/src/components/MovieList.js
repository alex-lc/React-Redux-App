import React from 'react';

const MovieList = (props) => {
    return (
        <div>
            <h2>Hello from Movie List component.</h2>
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

export default connect(mapStateToProps, {})(MovieList);