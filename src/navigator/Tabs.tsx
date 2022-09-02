import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabBarIcons} from '../helpers/tabBarIcons';
import {StackMain} from './StackMain';
import {StackTakePicture} from './StackTakePicture';
import {DARK_PURPLE, DARK_GREEN} from '../theme/MainTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName = tabBarIcons(route.name, focused);
          return iconName;
        },
        tabBarStyle: styles.nav,
        tabBarLabelStyle: {fontSize: 16},
        tabBarActiveTintColor: DARK_PURPLE,
        tabBarInactiveTintColor: DARK_GREEN,
        showIcon: true,
      })}>
      <Tab.Screen
        name="StackMain"
        options={{title: 'Gallery', unmountOnBlur: true}}
        component={StackMain}
      />
      <Tab.Screen
        name="StackTakePicture"
        options={{title: 'Take a picture'}}
        component={StackTakePicture}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: 70,
  },
});
