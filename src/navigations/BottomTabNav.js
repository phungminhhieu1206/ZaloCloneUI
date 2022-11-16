import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MessageStack from './MessageStack';
import Entypo from 'react-native-vector-icons/Entypo';
import ChannelStack from './ChannelStack';
import ContactStack from './ContactStack';
import TimelineStack from './TimelineStack';

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        showLabel: false,
        inactiveTintColor: '#ffbd7d',
        activeTintColor: '#e47911',
      }}>
      <BottomTab.Screen
        component={MessageStack}
        name="Message Stack"
        options={{
          tabBarIcon: ({color}) => <Entypo name="home" color={color} size={25} />,
        }}
      />
      <BottomTab.Screen
        component={ContactStack}
        name="Contact Stack"
        options={{
          tabBarIcon: ({color}) => <Entypo name="home" color={color} size={25} />,
        }}
      />
      <BottomTab.Screen
        component={TimelineStack}
        name="Timeline Stack"
        options={{
          tabBarIcon: ({color}) => <Entypo name="home" color={color} size={25} />,
        }}
      />
      <BottomTab.Screen
        component={ChannelStack}
        name="Channel Stack"
        options={{
          tabBarIcon: ({color}) => <Entypo name="home" color={color} size={25} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
