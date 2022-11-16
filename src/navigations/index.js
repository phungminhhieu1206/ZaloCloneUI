import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import {navigationRef} from './RootNavigator';

const AppNavContainer = () => {
  const isAuthenticated = false;

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavContainer;
