import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {TakePictureScreen} from '../screens/TakePictureScreen';
import {PictureScreen} from '../screens/PictureScreen';

const Stack = createStackNavigator<RootStackParams>();

export type RootStackParams = {
  StackMain: undefined;
  StackTakePicture: undefined;
  PictureScreen: undefined;
};

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="StackMain" component={MainScreen} />
      <Stack.Screen name="StackTakePicture" component={TakePictureScreen} />
      <Stack.Screen
        name="PictureScreen"
        options={{title: 'Picture screen'}}
        component={PictureScreen}
      />
    </Stack.Navigator>
  );
};
