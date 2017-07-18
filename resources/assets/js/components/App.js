import React, { Component } from 'react';
// import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Users from './UserList.js';
import Signup from './Signup/Signup.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

class App extends Component {
    render() {

        return (
          <Provider store={store} >
              <Router>
                  <div className='container'>
                      <Nav />
                      <Switch>
                          <Route exact path='/' component={Home} />
                          <Route exact path='/signup' component={Signup} />
                          <Route exact path='/users' component={Users} />
                          <Route render={()=>(<p>Not Found</p>)} />
                      </Switch>
                  </div>
              </Router>
          </Provider>
        );
    }
}

export default App;