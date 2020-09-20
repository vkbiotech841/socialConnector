import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// ACTIONS:
// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store. 
// You send them to the store using store.dispatch().

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {

    const id = uuid.v4(); // uuid generates random universal id

    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        })
    }, timeout)

};