import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import history from './history';
import store from './store/'


ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <App store={store}/>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
