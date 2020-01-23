const initialState = {
    isLoading: false,
    films: {},
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_FILMS':
            return state;
        default:
            return state;
    }
}