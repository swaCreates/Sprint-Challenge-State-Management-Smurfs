import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAIL} from '../actions';

const initialState= {
    smurf: null,
    isFethcing: false,
    error: '',
};

export const smurfReducer= (state = initialState, action) => {
    switch(action.type){
        case FETCHING_DATA:
            return{
                ...state,
                isFetching: true, 
            }
        case FETCHING_DATA_SUCCESS:
            return{
                ...state,
                smurf: action.payload, 
                isFetching: false,
            }
        case FETCHING_DATA_FAIL:
            return{
                ...state,
                smurf: null,
                isFetching: false,
            }
        default:
            return state;
    }
}