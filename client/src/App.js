import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import './App.css';


// Redux
// Provider connects react with redux.
// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
// Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.
// Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';




if (localStorage.token) {
  setAuthToken(localStorage.token);
}



const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
