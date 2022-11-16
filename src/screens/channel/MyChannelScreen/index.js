/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, TouchableOpacity, Platform, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../assets/themes/colors';
import styles from './styles';
import {SEARCH_FRIEND, SETTINGS} from '../../../constants/routeNames';
import Icon from '../../../components/common/Icon';

const MyChannelScreen = () => {
  const {navigate, setOptions} = useNavigation();
  useEffect(() => {
    setOptions({
      // title: item.first_name + ' ' + item.last_name,
      headerStyle: {
        ...Platform.select({
          ios: {
            backgroundColor: colors.accent,
          },
          android: {
            backgroundColor: colors.primary,
          },
          default: {
            // other platforms, web for example
            backgroundColor: colors.theme,
          },
        }),
      },
      headerLeft: () => {
        return (
          <View style={styles.headerLeft}>
            <TouchableOpacity
              onPress={() => {
                navigate(SEARCH_FRIEND);
              }}>
              <Icon type="EvilIcons" name="search" size={34} color={colors.white} />
            </TouchableOpacity>
          </View>
        );
      },
      headerTitle: () => {
        return (
          <View style={styles.headerTitle}>
            <TouchableOpacity
              onPress={() => {
                navigate(SEARCH_FRIEND);
              }}>
              <Text style={styles.title}>Search friends, messages...</Text>
            </TouchableOpacity>
          </View>
        );
      },
      headerRight: () => {
        return (
          <View style={styles.headerRight}>
            <TouchableOpacity
              onPress={() => {
                navigate(SETTINGS);
              }}>
              <Icon type="AntDesign" name="setting" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, []);

  return (
    <View>
      {Platform.OS === 'android' && <StatusBar animated={true} backgroundColor={colors.primary} />}
      <Text>MyChannelScreen</Text>
    </View>
  );
};

export default MyChannelScreen;
