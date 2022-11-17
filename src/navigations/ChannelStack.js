import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import colors from '../assets/themes/colors';
import {MY_CHANNEL, SETTINGS} from '../constants/routeNames';
import MyChannelScreen from '../screens/channel/MyChannelScreen';
import SettingScreen from '../screens/channel/SettingScreen';

const Stack = createStackNavigator();
const tabHiddenRoutes = [SETTINGS];

const ChannelStack = ({navigation, route}) => {
  // Hidden tab-bar when route special screen
  useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);

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
