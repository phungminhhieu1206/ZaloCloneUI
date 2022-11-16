import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MY_CHANNEL, SETTINGS} from '../constants/routeNames';
import MyChannelScreen from '../screens/channel/MyChannelScreen';
import SettingScreen from '../screens/channel/SettingScreen';

const Stack = createStackNavigator();

const ChannelStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={MyChannelScreen} name={MY_CHANNEL} />
      <Stack.Screen component={SettingScreen} name={SETTINGS} />
    </Stack.Navigator>
  );
};

export default ChannelStack;
