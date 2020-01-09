import {createStore} from "redux";
import {message} from '../reducer/message';

const store = createStore (
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;