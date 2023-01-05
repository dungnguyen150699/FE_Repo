import * as types from './../constants/ActionType.js';
var initialState = false;
var myReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.IS_DISPLAYFORM:
          return !initialState;
        default:
            return state;
    }
}
export default myReducer;