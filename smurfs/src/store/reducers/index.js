import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE
} from '../actions';

export const initialState = {
    isLoading: false,
    smurfs: [],
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
};