import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import generateNodes from './services/generateNodes';

const store = createStore(rootReducer, {
  nodes: generateNodes(3),
});

const BarleyBreak = (props = {}) => {
  return (
    <Provider store={store}>
      <App {...props}/>
    </Provider>
  );
};

export default BarleyBreak;
