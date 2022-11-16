import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {COMMENT, HOME_POSTS} from '../constants/routeNames';
import CommentScreen from '../screens/timeline/CommentScreen';
import HomePostScreen from '../screens/timeline/HomePostScreen';

const Stack = createStackNavigator();

const TimelineStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomePostScreen} name={HOME_POSTS} />
      <Stack.Screen component={CommentScreen} name={COMMENT} />
    </Stack.Navigator>
  );
};

export default TimelineStack;
