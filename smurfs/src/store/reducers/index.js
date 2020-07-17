import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE, 
    POST_SMURF_START, 
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE
} from '../actions';

export const initialState = {
    isLoading: false,
    smurfs: [],
    error: '',
    isPosting: false,
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
        case POST_SMURF_START:
            return {
                ...state,
                isPosting: true
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
                isPosting: false,
                smurfs: action.payload,
                postError: ''
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
                isPosting: false,
                postError: action.payload
            }
        default: 
            return state;
    }
};