import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import createLogger from 'redux-logger'
import reducer from './Reducer.js'

const loggerMiddleware = createLogger()
export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
