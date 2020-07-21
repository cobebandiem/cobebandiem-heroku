import {combineReducers} from 'redux';
import notes from './notes';
import user from './user';
import loading from './loading';

const rootReducer=combineReducers({
    notes,
    user,
    loading
})
export default rootReducer;