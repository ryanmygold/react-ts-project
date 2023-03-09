import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import reduxThunk from 'redux-thunk';
import arrReducer from "./arrState/reducer"
import numReducer from "./numState/reducer"
// 组合各个模块的reducers
const reducers = combineReducers({
    arrReducer,
    numReducer
})
// 创建仓库对象，注册reducers
/* const store = legacy_createStore(reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/
// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块
//let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose


// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
// const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store