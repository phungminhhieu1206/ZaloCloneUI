import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CHAT_DETAIL, CHAT_ROOMS} from '../constants/routeNames';
import ChatDetailScreen from '../screens/message/ChatDetailScreen';
import ChatRoomScreen from '../screens/message/ChatRoomScreen';

const Stack = createStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ChatRoomScreen} name={CHAT_ROOMS} />
      <Stack.Screen component={ChatDetailScreen} name={CHAT_DETAIL} />
    </Stack.Navigator>
  );
};

export default MessageStack;
