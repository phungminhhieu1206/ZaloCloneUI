import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MessageStack from './MessageStack';
import ChannelStack from './ChannelStack';
import ContactStack from './ContactStack';
import TimelineStack from './TimelineStack';
import Icon from '../components/common/Icon';

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Channel Stack">
      <BottomTab.Screen
        component={MessageStack}
        name="Message Stack"
        options={{
          tabBarIcon: ({color}) => (
            <Icon type="MaterialCommunityIcons" size={30} name="chat-processing" color={color} />
          ),
          tabBarLabel: 'Message',
        }}
      />
      <BottomTab.Screen
        component={ContactStack}
        name="Contact Stack"
        options={{
          tabBarIcon: ({color}) => <Icon type="MaterialIcons" size={30} name="contact-page" color={color} />,
          tabBarLabel: 'Contact',
        }}
      />
      <BottomTab.Screen
        component={TimelineStack}
        name="Timeline Stack"
        options={{
          tabBarIcon: ({color}) => (
            <Icon type="MaterialCommunityIcons" size={30} name="clock-time-eight" color={color} />
          ),
          tabBarLabel: 'Timeline',
        }}
      />
      <BottomTab.Screen
        component={ChannelStack}
        name="Channel Stack"
        options={{
          tabBarIcon: ({color}) => <Icon type="Ionicons" size={30} name="person" color={color} />,
          tabBarLabel: 'Channel',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
