import { legacy_createStore, combineReducers } from "redux"
import reducer from "./reducer.ts"
// import thunk from 'redux-thunk';
import arrReducer from "./arrState/reducer"
import numReducer from "./numState/reducer"

const reducers = combineReducers({
    arrReducer,
    numReducer
})

const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());
export default store