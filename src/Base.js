import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import DashboardScreen from './containers/DashboardScreen';
import MapScreen from './containers/MapScreen';
import WelcomeScreen from './containers/WelcomeScreen';

const DashboardNavigator = createMaterialTopTabNavigator({
  DashboardScreen,
  MapScreen,
});

const MainArea = createStackNavigator({
  DashboardNavigator: {
    screen: DashboardNavigator,
    navigationOptions: () => ({
      title: 'Dash',
      headerStyle: { backgroundColor: '#5eaeff' },
    }),
  },
});

const BaseNavigation = createSwitchNavigator({
  // AuthScreen,
  WelcomeScreen,
  MainArea,
});

export default createAppContainer(BaseNavigation);
