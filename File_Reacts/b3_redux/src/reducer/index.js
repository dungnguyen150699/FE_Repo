import { combineReducers } from "redux";
import tasks from './tasks'
import forms from './forms'

const myReducer = combineReducers({ // ket hop nhieu reducer thi suw dungj combine
    tasks, // tasks : tasks
    forms // forms : forms
});

export default myReducer;