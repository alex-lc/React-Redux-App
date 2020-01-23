import { FETCH_MOVIES_FAIL, FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS } from "../actions";

const initialState = {
    isLoading: false,
    films: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                films: action.payload,
                error: ''
            }
        case FETCH_MOVIES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}