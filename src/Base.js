import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import DashboardScreen from './containers/DashboardScreen';
import MapScreen from './containers/MapScreen';
import FriendsScreen from './containers/FriendsScreen';
import WelcomeScreen from './containers/WelcomeScreen';

const DashboardNavigator = createBottomTabNavigator({
  DashboardScreen,
  MapScreen,
  FriendsScreen,
  ProfileScreen: MapScreen,
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
