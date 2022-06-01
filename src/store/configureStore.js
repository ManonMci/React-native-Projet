import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connectToDevTools } from 'react-devtools-core';
//import {composeWithDevTools} from 'remote-redux-devtools';

const persistConfig = {
  key: 'brkp',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools({realtime: true, port: 8081});

export const configureStore = createStore(
  persistedReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(thunk)),
);
export const persistor = persistStore(configureStore);
