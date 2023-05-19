import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Tabs} from './src/navigation/Tabs';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Navigation />  */}
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
