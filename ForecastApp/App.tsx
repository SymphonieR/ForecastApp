import React from 'react';
import TabNavigator from './components/Navigation/Navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './services/Store/FavoriteReducer';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator></TabNavigator>
    </Provider>
  );
}
