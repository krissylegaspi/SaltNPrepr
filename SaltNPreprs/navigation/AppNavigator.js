import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import FilterScreen from '../screens/FilterScreen';
import CardScreen from '../screens/CardScreen';
import ApiCall from '../components/ApiCall';

import {config} from '../components/src/firebaseConfig'

config()

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    FilterRoute: FilterScreen,
    BackButton: MainTabNavigator,
    CardScreenRoute : CardScreen,
    ResultsRoute: ApiCall
  })
);
