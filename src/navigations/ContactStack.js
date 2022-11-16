import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CONTACTS_LIST, FRIEND_REQUESTS} from '../constants/routeNames';
import ContactScreen from '../screens/contact/ContactScreen';
import FriendRequestScreen from '../screens/contact/FriendRequestScreen';

const Stack = createStackNavigator();

const ContactStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ContactScreen} name={CONTACTS_LIST} />
      <Stack.Screen component={FriendRequestScreen} name={FRIEND_REQUESTS} />
    </Stack.Navigator>
  );
};

export default ContactStack;
