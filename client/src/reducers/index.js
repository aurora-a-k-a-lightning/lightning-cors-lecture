import * as actions from '../actions';

const initialState = {};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_KACL_CAST_SUCCESS:
            return action.cast;
        default:
            return state;
    }
};