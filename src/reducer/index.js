import {combineReducers} from 'redux';
import DisplayReducer from './reducer-messages';

const rootReducers = combineReducers({
    display: DisplayReducer
});

export default rootReducers
