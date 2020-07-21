import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reduxers/index';
import thunk from 'redux-thunk';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Authenticated from './components/Authenticated';
import Loading from './components/Loading';

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Loading>
          <div>
            <Switch>
              <Route path="/login" exact component={Login}/>
              {/* <Redirect from="/logout" to="/login"/> */}
              <Authenticated>
                <Header/>
                <Route path="/" exact component={App}/>
              </Authenticated>
            </Switch>
          </div>
        </Loading>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
