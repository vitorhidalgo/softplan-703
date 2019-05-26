import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';

const App = () => (
  <Provider store={store}>
    <h1>SOFTPLAN</h1>
  </Provider>
);

export default App;
