import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import colors from '../assets/themes/colors';
import {MY_CHANNEL, SETTINGS} from '../constants/routeNames';
import MyChannelScreen from '../screens/channel/MyChannelScreen';
import SettingScreen from '../screens/channel/SettingScreen';

const Stack = createStackNavigator();

const ChannelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MyChannelScreen}
        name={MY_CHANNEL}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.accent,
          },
          headerTintColor: colors.white,
          headerShadowVisible: true, // ẩn(hiện) border button header
        }}
      />
      <Stack.Screen component={SettingScreen} name={SETTINGS} />
    </Stack.Navigator>
  );
};

export default ChannelStack;
