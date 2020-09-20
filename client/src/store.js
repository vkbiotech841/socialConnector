import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';


// STORE:
// Store is a single place to store multiple data. and it is single source for data dispatch.
// Single source of truth.
// In Redux, all the application state is stored as a single object.
// The Store is the object that brings them together. The store has the following responsibilities:
// Holds application state;
// Allows access to state via getState();
// Allows state to be updated via dispatch(action);
// Registers listeners via subscribe(listener);
// Handles unregistering of listeners via the function returned by subscribe(listener).


// ACTIONS:
// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store. 
// You send them to the store using store.dispatch().

// REDUCER:
// The reducer is a pure function that takes the previous state and an action, and returns the next state.


const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;