import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';


// Multiple reducers can be combined together.
export default combineReducers({
    alert,
    auth

});