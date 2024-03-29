import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './state';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas';

const sagas = createSagaMiddleware()

const store =  createStore(rootReducer,composeWithDevTools(
  applyMiddleware(sagas)
))

sagas.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <div>
          dsadsad
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
