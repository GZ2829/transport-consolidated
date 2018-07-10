import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import bidReducer from './bids'
import truckReducer from './trucks'
import trailerReducer from './trailers'
import userReducer from './user'
import loadReducer from './loads'


const reducer = combineReducers({
    trucks: truckReducer,
    trailers: trailerReducer,
    loads: loadReducer,
    user: userReducer,
    bids: bidReducer
})

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)