import React from 'react';
import { createSwitchNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import DashboardScreen from './containers/DashboardScreen';
import WelcomeScreen from './containers/WelcomeScreen';

const MainArea = createDrawerNavigator({
  DashboardScreen,
});

const BaseNavigation = createSwitchNavigator({
  // AuthScreen,
  WelcomeScreen,
  MainArea,
});

export default createAppContainer(BaseNavigation);
