import { combineReducers } from "redux";


const nameReducer = (loader = 'unkown', action) => {
    switch (action.type) {
        case 'NAME_CHANGE':
            return action.name
        default:
            return loader;
    }
}

const reducers = combineReducers({
    name: nameReducer
});

export default reducers;
