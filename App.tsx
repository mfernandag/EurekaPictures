/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';

import SplashScreen from 'react-native-splash-screen';
import {Tabs} from './src/navigator/Tabs';
import {GalleryPicturesProvider} from './src/context/GalleryProvider';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EFEFEF',
  },
};

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <GalleryPicturesProvider>
      <NavigationContainer theme={MyTheme}>
        <Tabs />
      </NavigationContainer>
    </GalleryPicturesProvider>
  );
};

export default App;
