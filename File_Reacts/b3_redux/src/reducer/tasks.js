import * as types from './../constants/ActionType.js';
var initialState = [
    {
        id:1,
        name: 'Hoc Angular',
        status: false
    },
    {
        id:2,
        name: 'Hoc react',
        status: true
    },
    {
        id:3,
        name: 'Hoc Java',
        status: true
    },
];
var myReducer = (state = initialState,action) =>{
    switch (action.type) {
        case types.LIST_ALL:
            return [
                {
                    id:1,
                    name: 'Hoc Angularx',
                    status: false
                },
                {
                    id:2,
                    name: 'Hoc reactx',
                    status: true
                },
                {
                    id:3,
                    name: 'Hoc Javax',
                    status: true
                },
            ];
        case types.ADD_TASK:
            console.log(action)
            return state;
    
        default:
            return state;
    }
}
export default myReducer;