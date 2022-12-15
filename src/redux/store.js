import {configureStore} from '@reduxjs/toolkit';
import {createLogger}  from 'redux-logger';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import userReducer from './reducers/userReducer'

const logger = createLogger()

const store = configureStore({
    reducer: {
        userReducer
    }, 
    middleware: [thunk, promise, logger]
})

export default store
