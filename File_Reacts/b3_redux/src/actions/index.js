import * as types from './../constants/ActionType.js';

export const list_All = () =>{
    return{
        type : types.LIST_ALL
    }
}
export const addTask = (task) =>{
    return{
        type : types.ADD_TASK,
        task
    }
}
export const isDisplayForm = () =>{
    return{
        type : types.IS_DISPLAYFORM
    }
}

