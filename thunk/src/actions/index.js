import axios from 'axios';

export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";

// endpoint
// https://ghibliapi.herokuapp.com/films

export const fetchMovies = () => {
    return dispatch => {
        dispatch({ type: FETCH_MOVIES_START });
        axios.get(`https://ghibliapi.herokuapp.com/films`)
            .then((res) => {
                console.log(res);
                dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                // console.log(err);
                dispatch({ type: FETCH_MOVIES_FAIL, payload: err.response.status })
            })
    }
}
