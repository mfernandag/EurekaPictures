import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MainStackParams} from '../interfaces/MainStackParams';
import {MainScreen} from '../screens/MainScreen';
import {PictureScreen} from '../screens/PictureScreen';

const Stack = createStackNavigator<MainStackParams>();

export const StackMain = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 19.2,
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainScreen"
        component={MainScreen}
      />
      <Stack.Screen
        name="PictureScreen"
        options={{title: 'Your picture'}}
        component={PictureScreen}
      />
    </Stack.Navigator>
  );
};
