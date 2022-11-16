import {Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../../constants/routeNames';

const LoginScreen = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigate(REGISTER);
        }}
        style={styles.button}>
        <Text>Click to RegisterScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
