/**
 * @format
 */import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// STORE REDUX
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore, persistor} from './src/store/configureStore';

export const Root = () => (
  <Provider store={configureStore}>
    <PersistGate  persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);
