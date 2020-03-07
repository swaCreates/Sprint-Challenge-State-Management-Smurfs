import axios from 'axios';

export const FETCHING_DATA= 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS= 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAIL= 'FETCHING_DATA_FAIL';

export const getSmurf= () => dispatch => {
    dispatch({type: FETCHING_DATA});

    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);

        dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        alert(`Sorry there was an unexpected error: `, err)

        dispatch({type: FETCHING_DATA_FAIL})
    });    
}