import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TakePictureScreen} from '../screens/TakePictureScreen';

const Stack = createStackNavigator();

export const StackTakePicture = () => {
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
        name="TakePictureScreen"
        component={TakePictureScreen}
      />
    </Stack.Navigator>
  );
};
