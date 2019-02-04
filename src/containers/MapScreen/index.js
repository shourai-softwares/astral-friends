import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import MyMapTab from './MyMapTab';
import FriendsTab from './FriendsTab';

const InnerNavigation = createMaterialTopTabNavigator({
  MyMapTab,
  FriendsTab,
});

export default InnerNavigation;
