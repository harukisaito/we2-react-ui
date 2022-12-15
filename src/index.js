import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './App';
import store from './redux/store'

const rootDOM = document.getElementById('root')
const root = ReactDOM.createRoot(rootDOM)

const rootApp = 
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>

root.render(rootApp);