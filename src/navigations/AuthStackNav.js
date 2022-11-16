import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';
import LoginScreen from '../screens/authentication/LoginScreen';
import RegisterScreen from '../screens/authentication/RegisterScreen';
import colors from '../assets/themes/colors';

const Stack = createStackNavigator();

const AuthStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen
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
    </Stack.Navigator>
  );
};

export default AuthStackNav;
