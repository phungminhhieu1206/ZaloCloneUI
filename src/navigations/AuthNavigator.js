import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;