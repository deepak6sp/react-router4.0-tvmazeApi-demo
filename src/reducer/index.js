import {combineReducers} from 'redux';
import MessagesReducer from './reducer-messages';

const rootReducers = combineReducers({
    messages: MessagesReducer
});

export default rootReducers
