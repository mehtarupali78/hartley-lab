import { combineReducers } from 'redux';
import {welcomeData} from './welcomeDataReducers';

const rootReducer = combineReducers({
    welcomeData
})

export default rootReducer;