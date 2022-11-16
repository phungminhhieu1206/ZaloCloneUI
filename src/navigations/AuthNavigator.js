import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';
import LoginScreen from '../screens/authentication/LoginScreen';
import RegisterScreen from '../screens/authentication/RegisterScreen';
import colors from '../assets/themes/colors';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen
        name={REGISTER}
        component={RegisterScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.accent,
          },
          headerTintColor: colors.white,
          headerShadowVisible: true, // ẩn(hiện) border button header
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
