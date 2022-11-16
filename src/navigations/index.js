import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNav from './AuthStackNav';
import {navigationRef} from './RootNavigator';
import BottomTabNav from './BottomTabNav';

const AppNavContainer = () => {
  const isAuthenticated = true;

  return (
    <NavigationContainer ref={navigationRef}>
      {/* <AuthStackNav /> */}
      {isAuthenticated ? <BottomTabNav /> : <AuthStackNav />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
