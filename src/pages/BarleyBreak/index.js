import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer);

const BarleyBreak = (props = {}) => {
  return (
    <Provider store={store}>
      <App {...props}/>
    </Provider>
  );
};

export default BarleyBreak;
