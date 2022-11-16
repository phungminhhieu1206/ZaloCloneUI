import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const {goBack} = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <Text>RegisterScreen</Text>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
        style={styles.button}>
        <Text>Back to LoginScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;
