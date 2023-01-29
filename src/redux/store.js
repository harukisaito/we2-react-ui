import {configureStore} from '@reduxjs/toolkit';
import {createLogger}  from 'redux-logger';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import userReducer from '../components/privatePage/content/user/userReducer'
import applicationReducer from '../components/privatePage/content/applications/applicationReducer'
import courseReducer from '../components/privatePage/content/courses/courseReducer'
import displayReducer from '../components/privatePage/displayReducer'

const logger = createLogger()

const store = configureStore({
    reducer: {
        userReducer,
        applicationReducer,
        courseReducer,
        displayReducer,
    }, 
    middleware: [thunk, promise, logger]
})

export default store